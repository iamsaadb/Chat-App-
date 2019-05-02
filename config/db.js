/**
 * db.js                   -Connection to the cloud MongoDB atlas Server
 * @author                  Ratna Lama
 * @author
 * @author
 * @author
 * @author
 * @author
 *
 * @description             Handle connection to the cloud MongoDB atlas server
 */

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });
    console.log("Successfully connected to MongoDB...");
  } catch (err) {
    console.error(err.message);
    // EXIT process with failure
    process.exit(1);
  }
};

// Export Module
module.exports = connectDB;
