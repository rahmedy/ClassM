const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the classes collection and inserts the classes below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/classManager"
);

const classSeed = [
  {
    courseName: "Biology",
    sections: [
      {
        sectionNo: 1234,
        time: "8:00 AM",
        days: "MWF"
      },
      {
        sectionNo: 5678,
        time: "11:15 AM",
        days: "TR"
      },
    ],
    location: "Biology Building Room 1",
    textBooks: {
      title: "Biology 1101",
      author: "Dr. Suess",
      link: "www.booklink.com"
    },
    courseDescription: "Includes cell ultrastructure and function, energy transfer, reproduction, genetics, evolution, diversity of organisms, and ecology."
  },
  {
    courseName: "Corporate Finance",
    sections: [
      {
        sectionNo: 1357,
        time: "10:25 AM",
        days: "MWF"
      },
      {
        sectionNo: 2468,
        time: "12:45 PM",
        days: "TR"
      },
    ],
    location: "Business Building Room 3",
    textBooks: {
      title: "Stocks and Bonds",
      author: "Dr. Finance",
      link: "www.booklink.com"
    },
    courseDescription: "The course in corporate finance describes the corporation and its operating environment, the manner in which corporate boards and management evaluate investment opportunities/projects and arrange for financing such investments, create (or, alternatively, destroy) value for shareholders by planning and managing the "
  },
  {
    courseName: "Applied Political Theory",
    sections: [
      {
        sectionNo: 0987,
        time: "9:30 AM",
        days: "TR"
      },
      {
        sectionNo: 1029,
        time: "11:45 AM",
        days: "MWF"
      },
    ],
    location: "Law Buidling Room 5",
    textBooks: {
      title: "Political Theory",
      author: "Dr. Washington",
      link: "www.booklink.com"
    },
    courseDescription: "Political theory is the categorization of social thought by a group or by the persuasion or beliefs of a geo-political mass. ... Political theory can also be considered as a critical tradition of discourse that provides a reflection on collective life, the uses of collective power, and resources within a collectivity."
  },
];

db.Course
  .remove({})
  .then(() => db.Course.collection.insertMany(classSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
