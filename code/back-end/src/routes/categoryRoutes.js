const express = require('express')
const router = express.Router()

const {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryControllers')

router.route('/')
.get(getCategory)
.post(createCategory)

router.route('/:id')
.get(getCategoryById)
.patch(updateCategory)
.delete(deleteCategory)

module.exports = router