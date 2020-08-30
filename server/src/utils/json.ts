import Koa from 'koa';

export default (ctx: Koa.BaseContext, returnData: Object = {}) => {
    ctx.type = 'application/json';
    const newReturn = Object.assign({
        message: 'ok',
        data: {}
    }, {data: returnData});
    ctx.body = JSON.stringify(newReturn)
}
