
import koarouter from 'koa-router';
const router = new koarouter();
import {userSignin, verifyLogin} from '../controllers/user.controller';
import {createExercise, findMyExercise, findOfficialExercises, findSelectedExercises} from '../controllers/exercise.controller';

//用户注册 - 手动添加用户
// router.post('/api/userSignup', userControl.userSignup)

//用户登录
router.post('/api/userSignin', userSignin)
//用户退出登录
// router.post('/api/userSignout', userControl.userSignout)

/**
 * 题解模块
 */

//保存文章
router.post('/api/saveExercise', verifyLogin, createExercise);

//获取我的题解
router.get('/api/myExercise/bydate', verifyLogin, findMyExercise);
router.get('/api/officialExercises/bydate', verifyLogin, findOfficialExercises);
router.get('/api/selectedExercises/bydate', verifyLogin, findSelectedExercises);

export default router;