import express from 'express';
const productRouter = express.Router();
import {
    createProduct,
    getAllProductsInStock,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getAllProductsInStockBySize,
    getAllProductsInStockByBrand
} from '../db/index.js'

// get all products
productRouter.get('/admin', async(req, res, next) => {
    try {
        const products = await getAllProducts()

        res.send(products)
        
    } catch (error) {
        next(error)
    }
})

// get all products in stock
productRouter.get('/', async(req, res, next) => {
    try {
        const productsInStock = await getAllProductsInStock()
        console.log(productsInStock)
        res.send(productsInStock)
        
    } catch (error) {
        next(error)
    }
})

// get product by id
productRouter.get('/:productId', async(req, res, next) => {
    const { productId } = req.params

    try {
        const product = await getProductById(productId)
    
        res.send(product)
        
    } catch (error) {
        next(error)
    }
})

// create new product
productRouter.post('/', async(req, res, next) => {
    const { name, brandId, price, image } = req.body
    const productData = {
        name,
        brandId,
        price,
        image
    }
    try { 
        const newProduct = await createProduct(productData)
        res.send(newProduct)
    } catch (error) {
        next(error)
    }
})

// update product
productRouter.patch('/:productId', async(req, res, next) => {
    const { productId } = req.params;
    const { name, price, image, brandId } = req.body
    try { 
        const productToUpdate = await updateProduct({ id: productId, name, price, image, brandId })
        res.send(productToUpdate)
    } catch (error) {
        next(error)
    }
})

// delete product
productRouter.delete("/:productId", async (req, res, next) => {
    try {
      const { productId } = req.params;
      const productToDelete = await deleteProduct(productId);
      res.send(productToDelete);
    } catch (error) {
      next(error);
    }
  })

  export { productRouter }