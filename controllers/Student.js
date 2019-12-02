const express = require('express')
const api = express.Router()
const LOG = require('../utils/logger.js')
const Model = require('../models/student.js')
const notfoundstring = 'student not found'

// RESPOND WITH JSON DATA  --------------------------------------------
// GET all JSON
api.get('/findall', (req, res) => {
  LOG.info(`Handling /findall ${req}`)
  Model.find({}, (err, data) => {
    res.json(data)
  })
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  LOG.info(`Handling /findone ${req}`)
  const id = parseInt(req.params.id)
  Model.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    res.json(results[0])
  })
})

// RESPOND WITH VIEWS  --------------------------------------------

// GET request to base page.
api.get('/', (req, res) => {
  LOG.info(`Handling GET / ${req}`)
  Model.find({}, (err, data) => {
    res.locals.students = data
    res.render('student/index.ejs')
  })
})

// GET to create page
api.get('/create', (req, res) => {
  LOG.info(`Handling GET /create ${req}`)
  Model.find({}, (err, data) => {
    res.locals.students = data
    res.locals.student = new Model()
    res.render('student/create')
  })
})

// GET to details page
api.get('/delete/:id', (req, res) => {
  LOG.info(`Handling GET /delete/:id ${req}`)
  const id = parseInt(req.params.id)
  Model.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR ${JSON.stringify(results)}`)
    res.locals.student = results[0]
    return res.render('student/delete.ejs')
  })
})

// GET to create page
api.get('/details/:id', (req, res) => {
  LOG.info(`Handling GET /details/:id ${req}`)
  const id = parseInt(req.params.id)
  Model.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR ${JSON.stringify(results)}`)
    res.locals.student = results[0]
    return res.render('student/details.ejs')
  })
})

// GET to create page
api.get('/edit/:id', (req, res) => {
  LOG.info(`Handling GET /edit/:id ${req}`)
  const id = parseInt(req.params.id)
  Model.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR${JSON.stringify(results)}`)
    res.locals.student = results[0]
    return res.render('student/edit.ejs')
  })
})

// RESPOND WITH DATA MODIFICATIONS  -------------------------------

// post new
api.post('/save', (req, res) => {
  LOG.info(`Handling POST ${req}`)
  LOG.debug(JSON.stringify(req.body))
  const item = new Model()
  LOG.info(`NEW ID ${req.body._id}`)
  item._id = parseInt(req.body._id)
  item.Email = req.body.Email
  item.Given = req.body.Given
  item.family = req.body.family
  item.GPA = req.body.GPA
  item.Website = req.body.Website
  item.GitHub = req.body.GitHub
   item.Section = req.body.Section
  item.save((err) => {
    if (err) { return res.end('ERROR: student could not be saved') }
    LOG.info(`SAVING NEW student ${JSON.stringify(item)}`)
    return res.redirect('/student')
  })
})

// THESE ARE POST REQUEST ROUTES, WILL ONLY REPLY TO POST REQUEST.
// ABOVE ROUTING IS GET REQUEST FOR CERTAIN IDS

// post save w/ id
api.post('/save/:id', (req, res) => {
  LOG.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
  LOG.info(`Handling SAVING ID=${id}`)
  Model.updateOne({ _id: id },
    { // use mongoose field update operator $set
      $set: {
        Email: req.body.Email,
        Given: req.body.Given,
        family: req.body.family,
         GPA: req.body.GPA,
         Website: req.body.Website,
        GitHub: req.body.GitHub,
         Section: req.body.Section,
      }
    },
    (err, item) => {
      if (err) { return res.end(notfoundstring) }
      LOG.info(`ORIGINAL VALUES ${JSON.stringify(item)}`)
      LOG.info(`UPDATED VALUES: ${JSON.stringify(req.body)}`)
      LOG.info(`SAVING UPDATED student ${JSON.stringify(item)}`)
      return res.redirect('/student')
    })
})

// delete by id
api.post('/delete/:id', (req, res) => {
  LOG.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id)
  LOG.info(`Handling REMOVING ID=${id}`)
  Model.remove({ _id: id }).setOptions({ single: true }).exec((err, deleted) => {
    if (err) { return res.end(notfoundstring) }
    console.log(`Permanently deleted item ${JSON.stringify(deleted)}`)
    return res.redirect('/student')
  })
})

module.exports = api