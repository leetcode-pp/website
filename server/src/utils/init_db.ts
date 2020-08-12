import mongoose from '../db';
import Subject from '../schemas/subject';
import User from '../schemas/user';

let start = new Date("2020-08-31");
let daysCount = 91;
for (let i =1; i<=daysCount; i++) {
    let date = new Date(start.setDate(start.getDate()+1));
    console.log(date);
    let subject = new Subject({_id:i,date: date});
    subject.save();
}

let aduser = new User({_id: 1, name: '91admin', password: '91websiteisthebest', isAdmin: 1});
let commonuser = new User({_id: 2, name: 'test', password: '91learn', isAdmin: 0});

aduser.save();
commonuser.save();