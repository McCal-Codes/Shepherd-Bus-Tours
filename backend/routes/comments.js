const express = require('express');
const Comment = require('../models/comment');
const Trip = require('../models/trip');
const auth = require('../middleware/auth');

const router = express.Router();

// Add a comment to a trip
router.post('/:tripId', auth, async (req, res) => {
  try {
    const { text } = req.body;
    const newComment = new Comment({
      user: req.user.id,
      trip: req.params.tripId,
      text
    });

    const comment = await newComment.save();
    const trip = await Trip.findById(req.params.tripId);
    trip.comments.push(comment.id);
    await trip.save();

    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
