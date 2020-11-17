const express = require("express");
const router = express.Router();

const Course = require("../../models/Classes");

router.post("/", (req, res) => {
    console.log("POST CLASS:", req.body);
    Course.create({
      className: req.body.className,
      courseDescription: req.body.courseDescription,
      location: req.body.location

    });
    
   res.end(); 
  })
module.exports = router;


