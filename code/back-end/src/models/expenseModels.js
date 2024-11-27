const mongoose = require('mongoose')
const Category = require('./categoryModels')

const expenseSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: [true , 'Deve fornecer valor de despesa']
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: [true , 'Deve fornecer data de despesa']
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true , 'Deve fornecer categoria de despesa']
    },
})

module.exports = mongoose.model('Expense', expenseSchema)