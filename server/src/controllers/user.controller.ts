import User from '../schemas/user';
import jwt from 'jsonwebtoken';
import config from '../config';

const signin = async (ctx, next) => {
    let body = ctx.request.body;
    let name = body.name;
    let password = body.password;
  
    try {
      let user: any = await User.findOne({name: name});
      if (user === null) {
        ctx.response.body = {
          code: 0,
          data: null,
          message: '不存在该账号'
        };
        return;
      }

      //验证密码
      let isPassWord = await validate(password, user.password);;
      if (isPassWord === false) {
        ctx.response.body = {
          code: 0,
          data: null,
          message: '您输入的密码不正确'
        };
        return;
      }
  
      let userName = user.name;
  
      let token = jwt.sign({
        userName: userName
      }, config.tokenSecret, {
        expiresIn: 60 * 600   // 10小时过期
      });
      ctx.set('authorization', token);
      ctx.response.body = {
        code: 1,
        data: user,
        token: token,
        message: '登录成功'
      };
  
    } catch (err) {
      console.log('mylog', err);
    }
};

const signup = async (ctx, next) => {
  let body = ctx.request.body;
  let name = body.name;
  let password = body.password;
  let userName = ctx.userName;
  let user: any = await User.findOne({name: userName});
  if (user.isAdmin > 0) {
    let user = await User.findOne({name: name});
      if (user != null || name == undefined) {
        ctx.response.status = 400;
        ctx.response.body = {
          message: `你所输入的名字已存在，请更改用户名`
        }
      }
      else {
        const newUser = new User({name: name, password: password});
        await newUser.save();
        ctx.response.body = {
          message: '注册成功'
        }
      }
  }
  else {
    ctx.response.status = 401;
    ctx.response.body = {
      message: '权限不足，请联系管理员'
    };
  }
}

const verifyLogin = async (ctx, next) => {
    let token = ctx.request.headers['authorization']|| ctx.request.query.token || ctx.request.body.token || ctx.request.body.fields.token || ctx.request.get('authorization');
  
    const returnNotLogin = () => {
      ctx.response.body = {
        code: 2,
        data: null,
        message: '请先登录'
      };
    };
  
    try {
      let profile = await jwt.verify(token, config.tokenSecret);
      if (profile !== null) {
        ctx.userName = profile.userName;
        await next();
      }
    } catch (err) {
      if (err) {
        returnNotLogin();
      }
    }
};

function validate(loginPassword, actualPassword): boolean {
    return loginPassword === actualPassword;
}

export {signin, verifyLogin, signup};