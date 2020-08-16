import Exercises from '../schemas/exercise';
import User from '../schemas/user';
import Subject from '../schemas/subject';
import {dateFormat} from '../utils/date';
import { Mongoose, Schema } from 'mongoose';
import mongoose from '../db';

const createExercise = async (ctx, next) => {
    try {
        let userName = ctx.userName;
        let user: any = await User.findOne({name: userName});
        let userId = user._id.toJSON();
        let isOfficial = 0;
        if (user.isAdmin === 1) {
            isOfficial = 1;
        }
        let curDate = new Date();
        let date = new Date(ctx.request.body.date);
        let subject = await Subject.findOne({date: date});
        var exercise = {
            title: ctx.request.body.title,
            userName: user.name,
            content: ctx.request.body.content,
            createAt: curDate,
            updateAt: curDate,
            like_num: 0,
            isOfficial: isOfficial,
            isSelected: 0,
            subjectId: subject._id
        };
        let oneExercise = new Exercises(exercise);
        await oneExercise.save();
        ctx.response.body = {
            code: 1,
            message: '创建成功'
        };
    } catch(err) {
        console.log(err);
    }
    
}

const findMyExercise = async (ctx, next) => {
    try {
        let userName = ctx.userName;
        let date = ctx.query.date;
        date = new Date(date);
        let subject = await Subject.findOne({date: date});
        let myExercise = await Exercises.findOne({userName: userName, subjectId: subject._id});
        ctx.response.body = (myExercise).toJSON();

    } catch(err) {
        console.log(err);
    }
}

const findOfficialExercises = async (ctx, next) => {
    try {
        let date = ctx.query.date;
        date = new Date(date);
        let subject = await Subject.findOne({date: date});
        let officialExercises = await Exercises.find({isOfficial:true, subjectId: subject._id});
        ctx.response.body = JSON.stringify(officialExercises);
    } catch(err) {
        console.log(err);
    }
}

const findSelectedExercises = async (ctx, next) => {
    try {
        let date = ctx.query.date;
        date = new Date(date);
        let subject = await Subject.findOne({date: date});
        let selectedExercises = await Exercises.find({isSelected:true, subjectId: subject._id});
        ctx.response.body = JSON.stringify(selectedExercises);
    } catch(err) {
        console.log(err);
    }
}


const findAllExercises = async (ctx, next) => {
    try {
        let date = ctx.query.date;
        date = new Date(date);
        let subject = await Subject.findOne({date: date});
        let allExercises = await Exercises.find({subjectId: subject._id});
        ctx.response.body = JSON.stringify(allExercises);
    } catch(err) {
        console.log(err);
    }
}

const findAllExercisesDuringPeriod = async (ctx, next) => {
    try {
        let from = ctx.query.from;
        let to = ctx.query.to;
        from = new Date(from);
        to = new Date(to);
        let allExercises = await Exercises.aggregate([
            {
                $lookup: {
                    from: "subject",
                    localField: "subjectId",
                    foreignField: "_id",
                    as: "subject"
                }
            },
            {
                $match: {
                    "subject.date":{$gte:from, $lte: to}
                }
            }, 
            {
                $project: {
                    "_id": 1,
                    "title": 1,
                    "content": 1,
                    "likes": 1,
                    "isSelected": 1,
                    "isOfficial": 1,
                    "createAt": 1,
                    "userId": 1,
                    "userName": 1,
                    "subjectId": 1,
                }
            }
        ]);
        ctx.response.body = JSON.stringify(allExercises);
    } catch(err) {
        console.log(err);
    }
}

const setSelectedExercise = async (ctx, next) => {
    let id = ctx.query.id;
    let exercise = await Exercises.findByIdAndUpdate(new mongoose.Types.ObjectId(id), {"isSelected": true});
    ctx.response.body = {
        message: "success"
    };
}


//补签不算在签到中
const findChecksInMonth = async (ctx, next) => {
    let userName = ctx.userName;
    let from = ctx.query.from;
    let to = ctx.query.to;
    from = new Date(from);
    to = new Date(to);
    let results = [];
    let checks = await Subject.aggregate([
        {
            $lookup: {
                from: "exercise",
                localField: "_id",
                foreignField: "subjectId",
                as: "exercise"
            }
        },
        {
            $match: {
                date: { $gte: from, $lte: to },
                $or: [
                    {"exercise.userName": userName},
                    {"exercise": []}
                ]
            }
        }
    ]);
    checks.forEach(elm => {
        let flag = 0;
        if (elm.exercise.length > 0) {
            const checkTime = dateFormat(elm.exercise[0].createAt, 'yyyy-MM-dd');
            const subjectTime = dateFormat(elm.date, 'yyyy-MM-dd');
            if (checkTime == subjectTime) flag = 1;
        }
        results.push({date: elm.date, check: flag});
    });
    ctx.response.body = results;
}

const rank = async (ctx, next) => {
    let from = ctx.query.from;
    let to = ctx.query.to;
    from = new Date(from);
    to = new Date(to);
    let results = await Exercises.aggregate([
      {
          $lookup: {
            from: "user",
            localField: "userName",
            foreignField: "name",
            as: "user"
          }
      },
      {
          $match: {
            "createAt": {$gte: from, $lte: to}
          }
      },
      {
          $group: {
            _id: '$userName',
            checks: {$sum: 1},
            selects: {$sum: "$isSelected"}
          }
      },
        {
            $addFields:
              {
                userName : '$userName'
              }
        },
      {
          $project: {
            _id: 1,
            userName: 1,
            checks: 1,
            selects: 1
          }
      }
    ]);

    ctx.response.body = JSON.stringify(results);

}

export {createExercise, findMyExercise, findOfficialExercises, findSelectedExercises, findAllExercises,
    findAllExercisesDuringPeriod, setSelectedExercise, findChecksInMonth, rank};
