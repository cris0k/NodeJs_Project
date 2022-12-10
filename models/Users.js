'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

userSchema.statics.hashPassword = function(inputPassword) {
  return bcrypt.hash(inputPassword, 7);
}
  
userSchema.methods.comparePassword = function(inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;