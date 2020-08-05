
import koarouter from 'koa-router';
const router = new koarouter();
import {userSignin, verifyLogin} from '../controllers/user.controller';
import {createExercise} from '../controllers/exercise.controller';

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
router.post('/api/saveExercise', verifyLogin, createExercise)

//获取文章列表
//router.get('/api/getNewsList', newsControl.getNewsList)

//获取一篇文章
//router.get('/api/getOneNews', newsControl.getOneNews)

//删除一篇文章
//router.post('/api/delOneNews', userControl.verifyLogin, userControl.verifyAuthority , newsControl.delOneNews)

export default router;