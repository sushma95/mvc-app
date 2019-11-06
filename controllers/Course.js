/**
*  Course controller
*  Handles requests related to Course resources.
*
* @author Sushma yedugani <sushmapreethi95@gmail.com>
*
*/
const express = require('express')
const api = express.Router()
const Model = require('../models/Course.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find Course with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.Courses.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.Courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// RESPOND WITH VIEWS  --------------------------------------------
// GET to this controller base URI (the default)
api.get('/', (req, res) => {
    res.render('Course/index.ejs', {
      Courses: req.app.locals.Courses.query
    })
  })
// later

// RESPOND WITH DATA MODIFICATIONS  -------------------------------

// later

module.exports = api
