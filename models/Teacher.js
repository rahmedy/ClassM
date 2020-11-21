const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TeacherSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  schedule: [
    {
      courseName: String,
      sectionNo: Array
    }
  ]
});
module.exports = Teacher = mongoose.model("teacher", TeacherSchema);