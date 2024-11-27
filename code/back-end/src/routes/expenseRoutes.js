const express = require('express')
const router = express.Router()

const {
    getExpense,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense
} = require('../controllers/expenseControllers')

router.route('/')
.get(getExpense)
.post(createExpense)

router.route('/:id')
.get(getExpenseById)
.patch(updateExpense)
.delete(deleteExpense)

module.exports = router