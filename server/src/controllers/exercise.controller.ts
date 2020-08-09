import Exercises from '../schemas/exercise';
import User from '../schemas/user';
import Subject from '../schemas/subject';
import {dateFormat} from '../utils/date';
import { Mongoose } from 'mongoose';
import mongoose from '../db';

const createExercise = async (ctx, next) => {
    try {
        let _id = ctx.userId;
        let user: any = await User.findOne({_id: _id});
        
        let isOfficial = false;
        if (user.isAdmin === 1) {
            isOfficial = true;
        }
        let curDate = new Date();
        var exercise = {
            title: ctx.request.body.title,
            userId: _id,
            content: ctx.request.body.content,
            createAt: dateFormat(curDate, 'yyyy-MM-dd'),
            updateAt: dateFormat(curDate, 'yyyy-MM-dd'),
            like_num: 0,
            isOfficial: isOfficial,
            isSelected: false
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
        let userId = ctx.userId;
        let date = ctx.query.date;
        date = new Date(date);
        let subject = await Subject.findOne({date: date});
        let myExercise = await Exercises.findOne({userId: userId, subjectId: subject._id});
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
        let allExercises = await Exercises.find({isSelected:true, subjectId: subject._id});
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
                    localField: "exerciseId",
                    foreignField: "_id",
                    as: "subject"
                },
                $match: {
                    "subject.date":{$gte:from, $lte: to}
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

const findChecksInMonth = async (ctx, next) => {
    let userId = ctx.userId;
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
                date: {$gte: from, $lte: to},
                "exercise.userId": userId
            }
        }
    ]);
    checks.forEach(elm => {
        results.push({date: elm.date, check: elm.exercise? 1:0});
    });
    ctx.response.body = results;
}

export {createExercise, findMyExercise, findOfficialExercises, findSelectedExercises, findAllExercises,
    findAllExercisesDuringPeriod, setSelectedExercise, findChecksInMonth};
