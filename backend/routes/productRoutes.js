import express from 'express'
import { createProducts, getAllProducts, getSingleProduct, updateProduct } from '../controllers/productController.js'

const router = express.Router()


// best practice use Plurels because it's collections
// router.post('/products', createProducts)
// router.get('/products', getAllProducts)
// router.get('/products/:id', getSingleProduct)

router.route('/products')
  .get(getAllProducts)
  .post(createProducts)

router.route('/products/:id')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct)

export default router