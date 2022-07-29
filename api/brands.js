import express from "express";
const brandsRouter = express.Router();
import { 
    getAllBrands,
    createBrand,
    deleteBrand
} from '../db/index.js'

// Get all brands
brandsRouter.get('/', async (req, res, next) => {

    try {
        const allBrands = await getAllBrands()

        res.send(allBrands)
    } catch ({error, message}) {
        next ({error, message})
    }
})

// Create a new brand
brandsRouter.post('/', async (req, res, next) => {
    const { name } = req.body
    const user = req.user
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const newBrand = await createBrand({name})

        res.send(newBrand)
    } catch ({error, message}) {
        next ({error, message})
    }
})

// Delete a brand by brandId
brandsRouter.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    const user = req.user
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const deletedBrand = await deleteBrand(id)

        res.send(deletedBrand)
    } catch ({error, message}) {
        next ({error, message})
    }
})

export { brandsRouter }