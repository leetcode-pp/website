import Teachings from '../schemas/teachings';
import User from '../schemas/user';
import Subject from '../schemas/subject';
import {dateFormat} from '../utils/date';
import { Mongoose, Schema } from 'mongoose';
import mongoose from '../db';
import json from '../utils/json';

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
            message: '创建成功'
        };
    } catch(err) {
        throw new Error('保存讲义失败');
    }
    
}

const getTeachingsByCategory = async (ctx, next) => {
    try {
        let category = parseInt(ctx.query.category);
        let teachings = await Teachings.find({category: category}).select('_id title category');
        json(ctx, teachings);
    } catch(err) {
        throw new Error('获取讲义列表失败');
    }
}


const getTeachingDetailById = async (ctx, next) => {
    try {
        let id = ctx.query.id;
        let teaching = await Teachings.findOne({_id: new mongoose.Types.ObjectId(id)});
        json(ctx, teaching);
        //ctx.response.body = JSON.stringify(teaching);
    } catch(err) {
        throw new Error('获取讲义详情失败');
    }
}
export {createTeaching, getTeachingsByCategory, getTeachingDetailById};