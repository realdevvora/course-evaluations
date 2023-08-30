const express = require('express')
const {createReview, getReviews, getReview, deleteReview, updateReview } = require('../controllers/reviewController')
const requireAuth = require("../middleware/requireAuth")

const router = express.Router()


// get all course reviews
router.get('/', getReviews)

// get a single course review
router.get('/:id', getReview)

// require auth for all review modification routes
router.use(requireAuth)

// post new course review
router.post('/', createReview)

// delete course review
router.delete('/:id', deleteReview)

// update course review
router.patch('/:id', updateReview)


module.exports = router