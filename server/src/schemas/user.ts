import mongoose from '../db';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: Number
  },
  password: {
    type: String,
    default: '91learn'
  },
  name: {
    type: String,
    default: '',
    unique: true
  },
  isAdmin: {
    type: Number,
    default: 0
  },
  createAt: {
    type : Date
  },
  updateAt: {
    type : Date
  },
}, {collection: 'user'})

const User = mongoose.model('User', UserSchema, 'user');

export default User;