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
            authorid: _id,
            content: ctx.request.body.content,
            createAt: dateFormat(curDate, 'yyyy-MM-dd hh:mm:ss'),
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

export {createExercise};
