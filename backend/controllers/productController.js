import productModel from "../models/productModel.js"
import HandleError from "../utils/handleError.js"
import handleAsyncError from "../middleware/handleAsyncError.js"


//Creating Products
export const createProducts = handleAsyncError(async (req, res, next) => {
    const product = await productModel.create(req.body)
    res.status(200).json({
        success: true,
        product
    })
})
 
//get all products
export const getAllProducts = handleAsyncError(async (req, res) => {
    const products = await productModel.find()
    res.status(200).json({
        success: true,
        products
    })
})

// get single product
export const getSingleProduct = handleAsyncError(async (req, res, next) => {
    const product = await productModel.findById(req.params.id)
    if (!product) {
        // return res.status(500).json({
        //     success: false,
        //     message: "Product Not Found"
        // })
        return next(new HandleError("Product Not Found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})

//update Product
export const updateProduct = handleAsyncError(async (req, res) => {  
    const product = await productModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {
            new: true,
            runValidators: true
        })
    if (!product) {
        return next(new HandleError("Product Not Found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})

//Delete Product

export const deleteProdut = handleAsyncError(async (req, res) => {
    const product = await productModel.findByIdAndDelete(req.params.id)
    if (!product) {
        return res.status(200).json({
            success: true,
            message: 'Product not found'
        })
    }
    res.status(200).json({ 
        success: true,
        message: "Product Deleted Successfully"
    }) 
})

