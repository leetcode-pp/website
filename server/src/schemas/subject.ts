import mongoose from '../db';
const Schema = mongoose.Schema;
import uuid from 'node-uuid';

const subjectSchema = new Schema({
  title:{
    type : String,
    default : ''
  },
  content: {
    type: String,
    default: ''
  },
  createAt: {
    type : String,
  },
  updateAt: {
    type : String,
  },
  _id: {
    type: String,
    default: uuid.v1
  },
  date: {
    type: Date
  }
}, {collection: 'subject'})

const Subject = mongoose.model('Subject', subjectSchema, 'subject');

export default Subject;