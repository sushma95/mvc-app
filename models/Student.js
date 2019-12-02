/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Rishika Ponugoti <ponugotirishika@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

  _id: {
    type: Number,
    unique: true,
    required: true
  },
  Email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    unique: true
  },
  Given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    default: 'Family name'
  },
  GPA: {
    type: Number,
    required: true,
    min: 0,
    max: 4,
    default: 0
  },
  Website: {
    type: String,
    default: "http://yourwebsite.com"
  },
  GitHub: {
    type: String,
    default: "https://www.github.com/"
  },
  Section: {
    type: Number,
    required: true,
    min: 0,
    max: 4
  }
})
module.exports = mongoose.model('Student', StudentSchema)
