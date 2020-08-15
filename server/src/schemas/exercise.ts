import mongoose from '../db';
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  userId: {
    type: Number
  },
  title: {
    type : String,
    default : ''
  },
  content: {
    type : String,
    default : ''
  },
  category: {
    type : String,
    index : 'text',     
    default : ''
  },
  likes : {
    type : Number,
    default : 0
  },
  createAt: {
    type : Date,
  },
  updateAt: {
    type : Date,
  },
  isSelected: {
    type: Number,
    default: 0
  },
  isOfficial: {
    type: Number,
    default: 0
  },
  subjectId: {
    type: Number
  }
}, {collection: 'exercise'})

const Exercises = mongoose.model('Exercises', exerciseSchema, 'exercise');

export default Exercises;