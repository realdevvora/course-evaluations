const express = require('express')
const {getCourses, getCourse, createCourse } = require('../controllers/courseController')
const router = express.Router()
const {retrieveCourseInfo} = require('../api/courseApi')

retrieveCourseInfo()

// get all courses
router.get('/', getCourses)

// get a single course
router.get('/:id', getCourse)

// post new course
router.post('/', createCourse)


module.exports = router