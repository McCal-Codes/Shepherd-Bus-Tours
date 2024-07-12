const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  destination: String,
  date: Date,
  passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
