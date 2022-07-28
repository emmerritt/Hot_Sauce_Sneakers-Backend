import express from "express";
const sizesRouter = express.Router();
import { 
    getAllSizes,
    createSize,
    deleteSize
} from '../db/index.js'

// Get all sizes
sizesRouter.get('/', async (req, res, next) => {

    try {
        const allSizes = await getAllSizes()

        res.send(allSizes)
    } catch ({error, message}) {
        next ({error, message})
    }
})

// Create a new size
sizesRouter.post('/', async (req, res, next) => {
    const { size, gender } = req.body
    const user = req.user
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const newSize = await createSize({size, gender})

        res.send(newSize)
    } catch ({error, message}) {
        next ({error, message})
    }
})

// Delete a size by sizeId
sizesRouter.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    const user = req.user
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const deletedSize = await deleteSize(id)

        res.send(deletedSize)
    } catch ({error, message}) {
        next ({error, message})
    }
})

export { sizesRouter }