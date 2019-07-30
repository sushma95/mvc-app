/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const path = require('path')

console.log('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  console.log('Request to /')
  res.sendFile('index.html')
})

router.get('/index', (req, res, next) => {
  console.log('Request to /index')
  res.sendFile('index.html')
})

router.get('/newpage', (req, res, next) => {
  console.log('Request to /newpage')
  res.sendFile('newPage.html')
})

router.get('/sample', (req, res, next) => {
  console.log('Request to /sample')
  res.sendFile('sample.html')
})



// Defer path requests to a particular controller
router.use('/dev', require('../controllers/developer.js'))

console.log('END routing')
module.exports = router
