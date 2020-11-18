const express = require("express");
const router = express.Router();

const Course = require("../../models/Classes");

router.post("/add", (req, res) => {
    console.log("POST CLASS:", req.body);
    Course.create({
      courseName: req.body.courseName,
      courseDescription: req.body.courseDescription,
      location: req.body.location,
      sections: req.body.sections,
      textBooks: req.body.textBooks
    });
    
   res.end(); 
  })
module.exports = router;

