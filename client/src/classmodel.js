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
    sections: [
        {
            sectionNo: String,
            time: String,
            days: String
        },
    ],
    location: {
        type: String,
        required: false
    },
    textBooks: [
        {
            title: String,
            author: String,
            link: String
        }
    ],
    courseDescription: {
        type: String,
        required: false
    },
});

const Course = mongoose.model("classes", CourseSchema);
module.exports = Course
