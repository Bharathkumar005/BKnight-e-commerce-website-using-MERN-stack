const productModel = require('../models/productModel');
const ProductModel=require('../models/productModel');

//Get products API -/api/v1/product
exports.getProducts=async(req,res,next)=>{
    let query=req.query.keyword?{ name : {
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
    const products=await ProductModel.find(query);

    res.json({
        products
    })
}

//Get single product API-/api/v1/product/:id
exports.getSingleProduct=async(req,res,next)=>{
    try{
        const product=await productModel.findById(req.params.id);

        res.json({
            success:true,
            product
        })
    }
    catch(error)
    {
        res.status(404).json({
            success:false,
            message: 'unable to get the product with this ID'
        })
    }
}