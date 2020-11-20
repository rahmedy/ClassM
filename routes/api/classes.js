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

router.get("/get", (req, res) => {
  console.log("gettttt")
  Course.find({_id: "5fb7269ecd329f2566841669" }, function(err, docs) {
    if (!err) { 
        console.log(docs);
        process.exit();
    }
    else {
        throw err;
    }
});
})
module.exports = router;

