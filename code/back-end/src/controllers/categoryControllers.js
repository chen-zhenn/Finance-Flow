function getCategory(req, res) {
    console.log('Listar de categorias...') 
}

function getCategoryById(req, res) {
    console.log(`Lista categoria para ${req.params.id}`) 
}

function createCategory(req, res) {
    console.log('Cadastrar categoria...')
    const categoryData = req.body
    console.log(categoryData) 
}

function updateCategory(req, res) {
    console.log(`Atualizar categoria -> ${req.params.id}`)
    const categoryData = req.body
    console.log(categoryData) 
}

function deleteCategory(req, res) {
    console.log(`Deletar category -> ${req.params.id}`)
}

module.exports = {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}