const Model  = require('../model/Product.model')
const CatchAsync = require('../util/catch.async');

exports.createProduct = CatchAsync(async (req, res, next ) =>{
    const product = await Model.create(req.body);

    res.status(201).json(product);

});

exports.getProducts = CatchAsync(async (req, res, next)=>{

    const products = await Model.find();

    res.status(200).json(products);
})

exports.getProductById = CatchAsync( async(req, res, next)=>{

    const id = req.body.id;

    const product = await Model.findById(id);

    res.status(200).json(product);

});

exports.getProductsByName = CatchAsync (async (req, res, next)=>{

    const name = req.body.name

    const products = await Model.find({name});

    res.status(200).json(products);

});

exports.getProductByCategory = CatchAsync(async (req, res, next)=>{
    const products = await Model.find({category});

    res.status(200).json(products);
})