import mongoose from '../db';
const Schema = mongoose.Schema;

const teachingSchema = new Schema({

  title: {
    type : String,
    default : ''
  },
  content: {
    type : String,
    default : ''
  },
  category: {
    type : Number,    
    default : 0
  },
  createAt: {
    type : Date,
  },
  updateAt: {
    type : Date,
  },
}, {collection: 'teaching'})

const Teachings = mongoose.model('Teachings', teachingSchema, 'teaching');

export default Teachings;