const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const CoursesData = require('../data/Courses.json')
const SectionData = require('../data/Sections.json')//// read in data file
// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.developers = new Datastore()
  db.Courses = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method
  db.Courses.loadDatabase()

  db.Sections = new Datastore() // new object property
  db.Sections.loadDatabase()
  // insert the sample data into our datastore
  db.Sections.insert(SectionData)
  
  // insert the sample data into our datastore
  db.developers.insert(developerData)
  db.developers.insert(CoursesData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.developers = db.developers.find(developerData)
  
  console.log(`${app.locals.developers.query.length} developers seeded`)
  
  app.locals.Courses = db.developers.find(CoursesData)
  console.log(`${app.locals.Courses.query.length} Courses seeded`)

  app.locals.Sections = db.Sections.find(SectionData)
  console.log(`${app.locals.Sections.query.length} Sections seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}
