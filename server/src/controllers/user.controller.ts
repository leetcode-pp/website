import User from '../schemas/user';
import jwt from 'jsonwebtoken';
import config from '../config';

const signin = async (ctx, next) => {
    let body = ctx.request.body;
    let name = body.name;
    let password = body.password;
  
    try {
      let user: any = await User.findOne({name: name}, 'name isAdmin password');
      if (user === null) {
        ctx.response.status = 200;
        ctx.response.body = {
          code: 401,
          data: null,
          message: '账户名密码不正确'
        };
        return;
      }

      //验证密码
      let isPassWord = await validate(password, user.password);;
      if (isPassWord === false) {
        ctx.response.status = 200;
        ctx.response.body = {
          code: 401,
          data: null,
          message: '账户名密码不正确'
        };
        return;
      }
  
      let userName = user.name;
  
      let token = jwt.sign({
        userName: userName
      }, config.tokenSecret, {
        expiresIn: 60 * 600   // 10小时过期
      });
      ctx.set('Authorization', token);
      const result = {name: user.name, isAdmin: user.isAdmin};
      ctx.response.body = {
        code: 200,
        data: result,
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
        ctx.response.status = 200;
        ctx.response.body = {
          code: 400,
          message: `你所输入的名字已存在，请更改用户名`
        }
      }
      else {
        const newUser = new User({name: name, password: password});
        await newUser.save();
        ctx.response.body = {
          code: 200,
          message: '注册成功'
        }
      }
  }
  else {
    ctx.response.status = 200;
    ctx.response.body = {
      code: 401,
      message: '权限不足，请联系管理员'
    };
  }
}

const verifyLogin = async (ctx, next) => {
    let token = ctx.request.headers['authorization'];

    const returnNotLogin = () => {
      ctx.response.status = 200;
      ctx.response.body = {
        code: 401,
        data: null,
        message: '请先登录'
      };
    };
  
    try {
      let profile = await jwt.verify(token, config.tokenSecret);
      if (profile !== null) {
        ctx.userName = profile.userName;
      } else {
        return returnNotLogin();
      }
    } catch (err) {
      if (err) {
        return returnNotLogin();
      }
    }
    await next();
};

function validate(loginPassword, actualPassword): boolean {
    return loginPassword === actualPassword;
}

export {signin, verifyLogin, signup};