const express  = require('express');
const Router = express.Router();
const {
    getProductByCategory,getProductById,getProducts,getProductsByName,createProduct
} = require('../controllers/Crud.controller')


Router.get('/', getProducts)
.post('/new', createProduct)
.get('/:id', getProductById)
.get('/category', getProductByCategory)

module.exports = Router;