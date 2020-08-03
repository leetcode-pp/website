import Koa from 'koa';
import Router from 'koa-router';
const router = new Router();

import {createExample} from '../services/example.service';

router.get('/example', async (ctx: Koa.BaseContext) => {
    try {
        await createExample(ctx.query.name);
    } catch {}
});

export default router;