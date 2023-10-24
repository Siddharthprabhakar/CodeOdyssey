const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// Update progress for a specific topic
router.put('/update-progress/:topicId', async (req, res) => {
  try {
    const topicId = req.params.topicId;
    const { progress } = req.body;

    // Update or insert progress into the database
    await Progress.updateOne({ topicId }, { progress }, { upsert: true });

    res.status(200).json({ message: 'Progress updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get overall progress
router.get('/get-progress', async (req, res) => {
  try {
    // Calculate overall progress by summing up progress of all topics
    const progress = await Progress.aggregate([
      {
        $group: {
          _id: null,
          totalProgress: { $sum: '$progress' },
        },
      },
    ]);

    const overallProgress = progress.length ? progress[0].totalProgress : 0;

    res.json({ overallProgress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;