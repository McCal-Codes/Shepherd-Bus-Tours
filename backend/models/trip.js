const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  destination: String,
  date: Date,
  passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  userPhotos: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photos: [String]
  }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
