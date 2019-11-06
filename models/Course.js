/**
*  Course model
*  Describes the characteristics of each attribute in a Course resource.
*
* @author Sushma Yedugani <sushmapreethi95@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SchoolNumber : {
    type: Number,
    minlength: 1,
    maxlength: 2,
    required: true,
    unique: false,
    default:44
  },
  CourseNumber : {
    type: Number,
    minlength: 1,
    maxlength: 3,
    required: true,
    default: 563
  },
  Name : {
    type: String,
    
    maxlength: 100,
    required: true,
    default: 'Developing Web Apps and Services'
  },
  inSpring : {
    type: Boolean,
   
    maxlength: 3,
    required: true,
    
  },
  inSummer : {
    type: Boolean,
   
    maxlength: 3,
    required: true,
    
  },
  inFall : {
    type: Boolean,
    
    maxlength: 3,
    required: true,
   
  }
  
})
module.exports = mongoose.model('Course', CourseSchema)
