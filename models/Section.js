/**
*  Section model
*  Describes the characteristics of each attribute in a section resource.
*
* @author Nikitha Kethireddy <kethireddynikitha@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({

  _id: {
    type: Number,
    unique: true,
    required: true
  },

  SectionNumber: {
    type: String,
    maxlength: 2,
    required: true,
    default: '01'
  },
  Days: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'MWF'
  },
  StartTime : {
    type: Number,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: '1100'
  },
  RoomNumber : {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'CH 1200'
  },
  CourseID: {
    type: Number,
    maxlength: 3,
    required: true
  },
 
})
module.exports = mongoose.model('Section', SectionSchema)
