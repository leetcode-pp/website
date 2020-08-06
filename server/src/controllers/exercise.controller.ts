import Exercises from '../schemas/exercise';
import User from '../schemas/user';
import {dateFormat} from '../utils/date';

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
        let _id = ctx.userId;
        let date = ctx.query.date;
        let reg = new RegExp(date, 'i');
        let myExercise = await Exercises.findOne({_id: _id, createAt: {$regex: reg}});
        ctx.response.body = (myExercise).toJSON();

    } catch(err) {
        console.log(err);
    }
}

const findOfficialExercises = async (ctx, next) => {
    try {
        let date = ctx.query.date;
        let reg = new RegExp(date, 'i');
        let officialExercises = await Exercises.find({isOfficial:true, createAt: {$regex: reg}});
        ctx.response.body = JSON.stringify(officialExercises);
    } catch(err) {
        console.log(err);
    }
}

const findSelectedExercises = async (ctx, next) => {
    try {
        let date = ctx.query.date;
        let reg = new RegExp(date, 'i');
        let selectedExercises = await Exercises.find({isSelected:true, createAt: {$regex: reg}});
        ctx.response.body = JSON.stringify(selectedExercises);
    } catch(err) {
        console.log(err);
    }
}

const is = async (ctx, next) => {
    try {
        let date = ctx.query.date;
        let reg = new RegExp(date, 'i');
        let officialExercise = await Exercises.findOne({isSelected:true, createAt: {$regex: reg}});
        ctx.response.body = (officialExercise).toJSON();
    } catch(err) {
        console.log(err);
    }
}

export {createExercise, findMyExercise, findOfficialExercises, findSelectedExercises};
