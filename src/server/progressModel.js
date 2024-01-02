import { Schema, model } from 'mongoose';

const progressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  topicId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Progress = model('Progress', progressSchema);

export default Progress;
