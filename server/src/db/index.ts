import config from '../config';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const options = {
    auto_reconnect: true,
    poolSize: 20,
    useNewUrlParser: true
};

mongoose.connect(`${config.mongodb.uri}`,options);

mongoose.connection.on('connected', function(s) {
  console.log('连接数据库成功');
});

mongoose.connection.on('error', function (err) {
  console.warn(err);
});
export default mongoose;