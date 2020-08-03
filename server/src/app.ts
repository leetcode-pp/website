import config from './config';
import errorHandler from './utils/error_handler'
import { connect as MongoConnect } from 'mongoose';
import Koa from 'koa';
import koaCors from 'koa2-cors';
import koaMorgan from 'koa-morgan';

import example from './controllers/example';

// Initialize Application
const app = new Koa();

// Cors
app.use(koaCors());

// Connect To Mongo
MongoConnect(config.mongodb.uri, config.mongodb.options).catch((e) => console.error(e));

// error handle
app.use(errorHandler);

app.use(example.routes()).use(example.allowedMethods());

app.listen(config.koa.port, () => {
    console.info(new Date().toLocaleString());
    console.info('Service Loaded');
    console.info('Port', config.koa.port);
});
