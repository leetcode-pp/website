import Teachings from '../schemas/teachings';
import User from '../schemas/user';
import Subject from '../schemas/subject';
import {dateFormat} from '../utils/date';
import { Mongoose, Schema } from 'mongoose';
import mongoose from '../db';

const createTeaching = async (ctx, next) => {
    try {
        let userName = ctx.userName;
        let user: any = await User.findOne({name: userName});
        if (user.isAdmin !== 1) {
            ctx.response.code = 401;
        }
        let curDate = new Date();
        var teaching = {
            title: ctx.request.body.title,
            content: ctx.request.body.content,
            createAt: curDate,
            updateAt: curDate,
            category: ctx.request.body.category
        };
        let oneTeaching = new Teachings(teaching);
        await oneTeaching.save();
        ctx.response.body = {
            code: 1,
            message: '创建成功'
        };
    } catch(err) {
        console.log(err);
    }
    
}

const getTeachingsByCategory = async (ctx, next) => {
    try {
        let category = parseInt(ctx.query.category);
        let teachings = await Teachings.find({category: category});
        ctx.response.body = JSON.stringify(teachings);
    } catch(err) {
        console.log(err);
    }
}

export {createTeaching, getTeachingsByCategory};