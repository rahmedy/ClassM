const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const classSchema = new Schema({
  ClassName: {
    type: String,
    required: true,
  },

  
  });

module.exports = Classes = mongoose.model("Classes", classSchema);