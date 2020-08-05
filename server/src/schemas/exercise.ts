import mongoose from '../db';
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  userId: {
    type: String
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
    type : String,
  },
  updateAt: {
    type : String,
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  isOfficial: {
    type: Boolean,
    default: false
  },
  exerciseId: {
    type: String
  }
}, {collection: 'exercises'})

const Exercises = mongoose.model('Exercises', exerciseSchema, 'exercises');

export default Exercises;