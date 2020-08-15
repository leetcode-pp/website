import mongoose from 'mongoose';
import config from '../config';

mongoose.Promise = global.Promise;



mongoose.connect(`${config.mongodb.uri}`,config.options);

mongoose.connection.on('connected', function(s) {
  console.log('连接数据库成功');
});

mongoose.connection.on('error', function (err) {
  console.warn(err);
});
export default mongoose;