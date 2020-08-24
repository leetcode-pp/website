
import koarouter from 'koa-router';
const router = new koarouter();
import {signin, verifyLogin, signup} from '../controllers/user.controller';
import {createExercise, findMyExercise, findOfficialExercises, findSelectedExercises,
    findAllExercisesDuringPeriod, setSelectedExercise, findChecksInMonth, rank, findAllExercises} from '../controllers/exercise.controller';
//用户注册 - 手动添加用户
// router.post('/api/userSignup', userControl.userSignup)

//用户登录
router.post('/api/v1/userSignin', signin);
router.post('/api/v1/signup', signup);
router.get('/api/v1/ranks', verifyLogin, rank);
//用户退出登录
// router.post('/api/userSignout', userControl.userSignout)

/**
 * 题解模块
 */

//保存题解
router.post('/api/v1/saveExercise', verifyLogin, createExercise);

//获取我的题解
router.get('/api/v1/myExercise/byid', verifyLogin, findMyExercise);
router.get('/api/v1/officialExercises/byid', verifyLogin, findOfficialExercises);
router.get('/api/v1/selectedExercises/byid', verifyLogin, findSelectedExercises);
router.get('/api/v1/allExercises/byid', verifyLogin, findAllExercises);

router.get('/api/v1/allExercises/period', verifyLogin, findAllExercisesDuringPeriod);
router.get('/api/v1/addSelected', verifyLogin, setSelectedExercise);

router.get('/api/v1/checks/period', verifyLogin,findChecksInMonth);
export default router;