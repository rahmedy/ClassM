const express = require("express");
const router = express.Router();

const Course = require("../../models/Classes");

router.post("/", (req, res) => {
    console.log("POST CLASS:", req.body.className);
    Course.create({className: req.body.className});

   res.end(); 
 });


module.exports = router;
