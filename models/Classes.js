const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CourseSchema = new Schema({
  className: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  classSections: [{
    time: String,
    days: String
  }],
  location: {
      type: String,
      required: true
  },
  textBooks: [{
    title: String,
    author: String,
    link: String
  }],
  courseDescription: {
    type: String,
    required: true,
  },
  // gradedScheme: [{
    
  // }],
  });

module.exports = mongoose.model("Course", CourseSchema);
