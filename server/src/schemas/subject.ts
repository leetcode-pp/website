import mongoose from '../db';
const Schema = mongoose.Schema;

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
    type: Number
  },
  date: {
    type: Date
  }
}, {collection: 'subject'})

const Subject = mongoose.model('Subject', subjectSchema, 'subject');

export default Subject;