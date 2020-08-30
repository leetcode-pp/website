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
        let isOfficial = 0;
        if (user.isAdmin === 1) {
            isOfficial = 1;
        }
        let curDate = new Date();
        var exercise = {
            title: ctx.request.body.title,
            userName: user.name,
            content: ctx.request.body.content,
            createAt: curDate,
            updateAt: curDate,
            like_num: 0,
            isOfficial: isOfficial,
            isSelected: 0,
            subjectId: ctx.request.body.subjectid
        };
        let oneExercise = new Exercises(exercise);
        await oneExercise.save();
        ctx.response.body = {
            code: 1,
            message: '创建成功'
        };
    } catch(err) {
        throw new Error('创建题解失败');
    }
    
}

const findMyExercises = async (ctx, next) => {
    try {
        let userName = ctx.userName;
        let subjectId = parseInt(ctx.query.subjectid);
        let myExercises = await Exercises.find({userName: userName, subjectId: subjectId});
        ctx.response.body = JSON.stringify(myExercises);

    } catch(err) {
        throw new Error('查找我的题解失败');
    }
}

const findOfficialExercises = async (ctx, next) => {
    try {
        let subjectId = parseInt(ctx.query.subjectid);
        let officialExercises = await Exercises.find({isOfficial:true, subjectId: subjectId});
        ctx.response.body = JSON.stringify(officialExercises);
    } catch(err) {
        throw new Error('查找官方题解失败');
    }
}

const findSelectedExercises = async (ctx, next) => {
    try {
        let subjectId = parseInt(ctx.query.subjectid);
        let selectedExercises = await Exercises.find({isSelected:true, subjectId: subjectId});
        ctx.response.body = JSON.stringify(selectedExercises);
    } catch(err) {
        throw new Error('查找精选题解失败');
    }
}


const findAllExercises = async (ctx, next) => {
    try {
        let subjectId = parseInt(ctx.query.subjectid);
        let allExercises = await Exercises.find({subjectId: subjectId}).select('title userName likes isSelected isOfficial subjectId');
        ctx.response.body = JSON.stringify(allExercises);
    } catch(err) {
        throw new Error('查找所有题解失败');
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
                    "likes": 1,
                    "isSelected": 1,
                    "isOfficial": 1,
                    "createAt": 1,
                    "userName": 1,
                    "subjectId": 1,
                }
            }
        ]);
        ctx.response.body = JSON.stringify(allExercises);
    } catch(err) {
        throw new Error('查找一定时间阶段所有题解失败');
    }
}

const setSelectedExercise = async (ctx, next) => {
    try {
        let userName = ctx.userName;
        let user: any = await User.findOne({name: userName});
        if (user.isAdmin > 0) {
            let id = ctx.query.id;
            let exercise = await Exercises.findByIdAndUpdate(new mongoose.Types.ObjectId(id), {"isSelected": true});
            ctx.response.body = {
                message: "success"
            };
        } else {
            ctx.response.status = 401;
            ctx.response.body = {
                message: '请联系管理员，权限不足'
            };
        }
    } catch (error) {
        throw new Error('设置精选失败');
    }
    
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
    if (from == undefined || to == undefined) {
        from = new Date("2020-09-01");
        to = new Date();
    } else {
        from = new Date(from);
        to = new Date(to);
    }
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

const getExerciseDetailById = async (ctx, next) => {
    let id = ctx.query.id;
    let exercise = await Exercises.findOne({_id: new mongoose.Types.ObjectId(id)});
    ctx.response.body = JSON.stringify(exercise);
}

export {createExercise, findMyExercises, findOfficialExercises, findSelectedExercises, findAllExercises,
    findAllExercisesDuringPeriod, setSelectedExercise, findChecksInMonth, rank, getExerciseDetailById};
