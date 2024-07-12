const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  dob: Date,
  address: String,
  accountOption: String,
  emergencyContact: {
    name: String,
    phone: String,
    isOrganizer: Boolean,
    isGoing: Boolean,
  },
  trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
