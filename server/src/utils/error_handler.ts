import json from './json'
import Koa from 'koa';

// Error Handler For Koa2
export default async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
        await next()
    } catch (e) {
        // Unknown Exception
        ctx.response.status = 500;
        ctx.response.body = {
            data: null,
            message: e.message || 'Unknown Internal Server Error'
        }
    }
}
