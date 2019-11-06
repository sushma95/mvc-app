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
    required: true
  },
 
  given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
 
  GitHub: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
   
  },
  Website: {
    type: String,
    minlength: 5,
    maxlength: 12,
    required: true,
    default: '64468'
  },
  GPA:
   {
    type: Number,
    minlength: 5,
    maxlength: 100,
    required: true
  },
     Section_ID: {
    type: Number,
    minlength: 4,
    maxlength: 100,
    required: true
    
  }

})
module.exports = mongoose.model('Student', StudentSchema)