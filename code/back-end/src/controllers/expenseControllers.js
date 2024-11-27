function getExpense(req, res) {
    console.log('Listar de despesas...') 
}

function getExpenseById(req, res) {
    console.log(`Lista despesas por ${req.params.id}`) 
}

function getExpenseById(req, res) {
    console.log(`Lista despesas por ${req.params.id}`) 
}

function createExpense(req, res) {
    console.log('Cadastrar despesas...')
    const expenseData = req.body
    console.log(expenseData) 
}

function updateExpense(req, res) {
    console.log(`Atualizar despesa -> ${req.params.id}`)
    const expenseData = req.body
    console.log(expenseData) 
}

function deleteExpense(req, res) {
    console.log(`Deletar despesa -> ${req.params.id}`)
}

module.exports = {
    getExpense,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense
}