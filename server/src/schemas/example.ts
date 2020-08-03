import { Schema, model } from 'mongoose';

const Example = new Schema({
    name: String
}, {collection: 'examples'});

export default model('Example', Example);