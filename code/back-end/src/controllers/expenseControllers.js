const Expense = require('../models/expenseModels')

async function getExpense(req, res) { 
    const queryParams = req.query
    try {
        const expense = await Expense.find(queryParams)
        res
        .status(200)
        .json({
            status: 'success',
            message: 'Despesa(s) obtida com sucesso!',
            data: expense
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: 'Falha ao obter despesa(s)!',
            data: error.errors
        })
    } 
}

async function getExpenseById(req, res) {
    try {
        const expense = await Expense.findById(req.params.id)
        res
        .status(200)
        .json({
            status: 'success',
            message: 'Despesa obtida com sucesso!',
            data: expense
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: `Falha ao obter Despesa para id: ${req.params.id}`,
        })
    }  
}

async function createExpense(req, res) {
    const data = req.body
    try {
        const expense = await Expense.create(data)
        res
        .status(201)
        .json({
            status: 'success',
            message: 'Despesa criada com sucesso!',
            data: expense
        })
    } catch (error) {
        console.log(error)
        res
        .status(400)
        .json({
            status: 'fail',
            message: error.errors.type.message,
            data: error.errors.type
        })
    } 
}

async function updateExpense(req, res) {
    const id = req.params.id
    const data = req.body
    const opt =  {
        new: true,
        runValidators: true,
    }
    try {
        const expense = await Expense.findByIdAndUpdate(id, data, opt)
        res
        .status(200)
        .json({
            status: 'success',
            message: 'Despesa atualizada com sucesso!',
            data: expense
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: `Falha ao atualizar despesa: ${id}`,
        })
    } 
}

async function deleteExpense(req, res) {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id)
        res
        .status(200)
        .json({
            status: 'success',
            message: 'Despesa deletada com sucesso!',
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: `Falha ao deletar despesa!`,
        })
    }
}

module.exports = {
    getExpense,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense
}