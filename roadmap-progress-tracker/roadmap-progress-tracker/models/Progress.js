const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  topicId: String, // Use ObjectId for topicId
  progress: Number,
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
