const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the classes collection and inserts the classes below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/classManager"
);

const userSeed = [
  {
    type: "teacher",
    firstName: "Allen",
    lastName: "Leonard",
    email: "allenL@gmail.com",
    username: "allenL",
    password: "1",
    schedule: [
      {
        courseName: "Biology",
        sectionNo: 1234
      },
      {
        courseName: "Biology",
        sectionNo: 5678
      }
    ]
  },
  {
    type: "teacher",
    firstName: "Sydney",
    lastName: "Smith",
    email: "sydsmith@gmail.com",
    username: "sys123",
    password: "2",
    schedule: [
      {
        courseName: "Applied Political Theory",
        sectionNo: 0987
      },
      {
        courseName: "Applied Political Theory",
        sectionNo: 1029
      }
    ]
  },
  {
    type: "teacher",
    firstName: "John",
    lastName: "Doe",
    email: "JD@gmail.com",
    username: "jd",
    password: "3",
    schedule: [
      {
        courseName: "Corporate Finance",
        sectionNo: 2468
      },
      {
        courseName: "Corporate Finance",
        sectionNo: 1357
      }
    ]
  },
  {
    type: "student",
    firstName: "Matt",
    lastName: "Stalzer",
    email: "mjstalz@gmail.com",
    username: "mjstalzer",
    password: "1234",
    schedule: [
      {
        courseName: "Corporate Finance",
        sectionNo: 1357
      },
      {
        courseName: "Biology",
        sectionNo: 1234
      }
    ]
  },
  {
    type: "student",
    firstName: "Rayan",
    lastName: "Ahmedy",
    email: "rayan.a@gmail.com",
    username: "rayan.a",
    password: "2345",
    schedule: [
      {
        courseName: "Biology",
        sectionNo: 5678
      },
      {
        courseName: "Applied Political Theory",
        sectionNo: 0987
      }
    ]
  },
  {
    type: "student",
    firstName: "Jake",
    lastName: "Battaglia",
    email: "JB@gmail.com",
    username: "jb",
    password: "3456",
    schedule: [
      {
        courseName: "Corporate Finance",
        sectionNo: 2468
      },
      {
        courseName: "Applied Political Theory",
        sectionNo: 1029
      }
    ]
  },
  {
    type: "student",
    firstName: "Hailey",
    lastName: "Parker",
    email: "haiypark@gmail.com",
    username: "hpark",
    password: "4567",
    schedule: [
      {
        courseName: "Corporate Finance",
        sectionNo: 2468
      },
      {
        courseName: "Applied Political Theory",
        sectionNo: 1029
      }
    ]
  },
  {
    type: "student",
    firstName: "Courtney",
    lastName: "Pasch",
    email: "cp@gmail.com",
    username: "cpasch123",
    password: "5678",
    schedule: [
      {
        courseName: "Biology",
        sectionNo: 5678
      },
      {
        courseName: "Applied Political Theory",
        sectionNo: 0987
      }
    ]
  },
  {
    type: "student",
    firstName: "Clay",
    lastName: "Wright",
    email: "cdub@gmail.com",
    username: "cw1616",
    password: "6789",
    schedule: [
      {
        courseName: "Corporate Finance",
        sectionNo: 1357
      },
      {
        courseName: "Biology",
        sectionNo: 1234
      }
    ]
  },
  {
    type: "student",
    firstName: "John",
    lastName: "West",
    email: "jw@gmail.com",
    username: "jwest",
    password: "7890",
    schedule: [
      {
        courseName: "Corporate Finance",
        sectionNo: 1357
      },
      {
        courseName: "Biology",
        sectionNo: 1234
      }
    ]
  },
  {
    type: "student",
    firstName: "Trevor",
    lastName: "Croyder",
    email: "t.croy@gmail.com",
    username: "tcroyder1",
    password: "1010",
    schedule: [
      {
        courseName: "Biology",
        sectionNo: 5678
      },
      {
        courseName: "Applied Political Theory",
        sectionNo: 0987
      }
    ]
  },
  {
    type: "student",
    firstName: "Blake",
    lastName: "Jones",
    email: "bj@gmail.com",
    username: "blake.jones",
    password: "2020",
    schedule: [
      {
        courseName: "Biology",
        sectionNo: 5678
      },
      {
        courseName: "Applied Political Theory",
        sectionNo: 0987
      }
    ]
  },
];

db.User
  .remove({})
  .then(() => db.User.insertMany(userSeed))
  .then(data => {
    console.log(data + "this was inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

