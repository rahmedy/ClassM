const express = require("express");
const router = express.Router();

const Class = require("../../models/Classes");

router.post("/api", (req, res) => {
   const newClass = new Class({
       ClassName: req.body.ClassName
    })
})


