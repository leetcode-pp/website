import config from './config';
import errorHandler from './utils/error_handler'
import Koa from 'koa';
import koaCors from 'koa2-cors';
import router from './router';
import koaMorgan from 'koa-morgan';
import bodyParser from'koa-bodyparser';
import koaBody from 'koa-body';
import path from 'path';
import fs from 'fs';

// Initialize Application
const app = new Koa();

const logFileName = path.join(__dirname, 'logs', 'access.log')
const logStream = fs.createWriteStream(logFileName, { flags: 'a' })
app.use(koaMorgan('combined', {
    stream: logStream
}))

// Cors
app.use(koaCors({exposeHeaders: ['Authorization', 'authorization']}));

app.use(koaBody({multipart: true}))

app.use(bodyParser())

// error handle
app.use(errorHandler);


app.use(router.routes())
app.use(router.allowedMethods())


app.listen(config.koa.port, () => {
    console.info(new Date().toLocaleString());
    console.info('Service Loaded');
    console.info('Port', config.koa.port);
});
