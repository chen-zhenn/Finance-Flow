const Category = require('../models/categoryModels')

async function getCategory(req, res) {
    try {
        const category = await Category.find()
        res
        .status(200)
        .json({
            status: 'success',
            message: 'Categoria(s) obtida com sucesso!',
            data: category
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: 'Falha ao obter categoria(s)!',
            data: error.errors
        })
    } 
}

async function getCategoryById(req, res) {
    try {
        const category = await Category.findById(req.params.id)
        res
        .status(200)
        .json({
            status: 'success',
            message: 'Categoria obtida com sucesso!',
            data: category
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: `Falha ao obter categoria para ${req.params.id}`,
        })
    }  
}

async function createCategory(req, res) {
    const data = req.body
    try {
        const category = await Category.create(data)
        res
        .status(201)
        .json({
            status: 'success',
            message: 'Categoria criada com sucesso!',
            data: category
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: error.errors.type.message,
            data: error.errors.type
        })
    }
}

async function updateCategory(req, res) {
    const id = req.params.id
    const data = req.body
    const opt =  {
        new: true,
        runValidators: true,
    }
    try {
        const category = await Category.findByIdAndUpdate(id, data, opt)
        res
        .status(200)
        .json({
            status: 'success',
            message: 'Categoria atualizada com sucesso!',
            data: category
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: `Falha ao atualizar categoria!`,
        })
    } 
}

async function deleteCategory(req, res) {
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        res
        .status(200)
        .json({
            status: 'success',
            message: 'Categoria deletada com sucesso!',
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status: 'fail',
            message: `Falha ao deletar categoria!`,
        })
    }
}

module.exports = {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}