import productModel from "../models/productModel.js"

//Creating Products
export const createProducts = async (req, res) => {
    const product = await productModel.create(req.body)
    res.status(200).json({
        success: true,
        product
    })
}
 
//get all products
export const getAllProducts = async (req, res) => {
    const products = await productModel.find()
    res.status(200).json({
        success: true,
        products
    })
}

// get single product
export const getSingleProduct = async (req, res) => {
    const product = await productModel.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Not Found"
        })
    }
    res.status(200).json({
        success: true,
        product
    })
}

//update Product
export const updateProduct = async (req, res) => {
    let product = await productModel.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Not Found"
        })
    }
    product = await productModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {
            new: true,
            runValidators: true
        })
    res.status(200).json({
        success: true,
        product
    })
}

//Delete Product

export const deleteProdut = async (req, res) => {
    let product = await productModel.findById(req.params.id)
    if (!product) {
        return res.send(200).json({
            success: true,
            message: 'Product not found'
        })
    }
    product = await productModel.findByIdAndDelete(req.params.id)
    res.send(200).json({
        success: true,
        message: "Product Deleted Successfully"
    }) 
}