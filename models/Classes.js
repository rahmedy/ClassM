const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    sections: [{
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
});

module.exports = mongoose.model("Course", CourseSchema);