const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true , 'Deve fornecer nome de categoria']
    },
    type: {
        type: String,
        enum: ['despesa', 'receita'],
        required: [true , 'Deve fornecer tipo de categoria']
    },
}, { timestamps: true })

module.exports = mongoose.model('Category', categorySchema)