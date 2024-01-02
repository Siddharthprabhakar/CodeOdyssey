import express from 'express';
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const app = express();
const port = process.env.PORT || 5000; // Change the port to 5000

// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/reactdata', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB 5000");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Progress Schema
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

// Middleware
app.use(express.json());

// Function to update progress
const updateProgress = async (userId, topicId, completed) => {
  try {
    const existingProgress = await Progress.findOne({ userId, topicId });

    if (existingProgress) {
      existingProgress.completed = completed;
      await existingProgress.save();
      return existingProgress;
    } else {
      const newProgress = new Progress({ userId, topicId, completed });
      await newProgress.save();
      return newProgress;
    }
  } catch (error) {
    throw error;
  }
};

// Function to get user progress
const getUserProgress = async (userId) => {
  try {
    const progress = await Progress.find({ userId });
    return progress;
  } catch (error) {
    throw error;
  }
};

// POST route to update progress
app.post('/progress/update-progress/:topicId', async (req, res) => {
  const { userId } = req.body;
  const { topicId } = req.params;
  const completed = true; // Assuming progress is completed when updating

  try {
    const progress = await updateProgress(userId, topicId, completed);
    res.json(progress);
  } catch (error) {
    console.error("Error updating progress:", error);
    res.status(500).send("Error updating progress");
  }
});

// GET route to get user progress
app.get('/progress/get-progress/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const progress = await getUserProgress(userId);
    res.json(progress);
  } catch (error) {
    console.error("Error fetching user progress:", error);
    res.status(500).send("Error fetching user progress");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
