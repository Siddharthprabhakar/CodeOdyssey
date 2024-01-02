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
    const uniqueTopicIds = await Progress.distinct('topicId');

    res.json({ topicIds: uniqueTopicIds });
  } catch (error) {
    console.error('Error fetching topic names:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/clear-all', async (req, res) => {
  try {
      const result = await Progress.deleteMany();

      if (result.deletedCount > 0) {
          res.status(200).json({ message: 'All progress cleared successfully' });
      } else {
          res.status(404).json({ error: 'No progress found to clear' });
      }
  } catch (error) {
      console.error('Error clearing progress:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
