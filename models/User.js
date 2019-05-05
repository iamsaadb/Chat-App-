const mongoose = require("mongoose");

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  avatar: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

/**
 * Export Module
 */
module.exports = User = mongoose.model("user", UserSchema);
