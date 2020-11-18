const express = require("express");
const router = express.Router();

const Course = require("../../models/Classes");

router.post("/add", (req, res) => {
    console.log("POST CLASS:", req.body);
    Course.create({
      className: req.body.className,
      courseDescription: req.body.courseDescription,
      location: req.body.location,
      sections: req.body.sections,
      books: req.body.books
    });
    
   res.end(); 
  })
module.exports = router;

