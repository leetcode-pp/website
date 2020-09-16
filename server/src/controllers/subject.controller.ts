import Subject from '../schemas/subject';
import User from '../schemas/user';
import {dateFormat} from '../utils/date';
import { Mongoose, Schema } from 'mongoose';
import mongoose from '../db';
import json from '../utils/json';


const getSubjectList = async(ctx, next) => {
    let subjects= await Subject.find().select('_id title content date');
    ctx.response.body = {
        code: 200,
        data: subjects,
        message: 'ok'
    }
}

const getSubjectDetail = async(ctx, next) => {
    let id = ctx.query.id;
    let subject = await Subject.findById(id).select('_id title content date');

    ctx.response.body = {
        code: 200,
        data: subject,
        message: 'ok'
    }
}

export {getSubjectList, getSubjectDetail};