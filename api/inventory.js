import express from "express";
const inventoryRouter = express.Router();
import { 
    getStockByProductIdAndSize,
    createInventoryItem, 
    updateStockByProductIdAndSize 
} from '../db/index.js'

// Get current stock for inventory item
inventoryRouter.get('/:productId/:sizeId', async (req, res, next) => {
    const { productId, sizeId } = req.params;

    try {
        const inventoryItem = await getStockByProductIdAndSize({productId, sizeId})

        res.send(inventoryItem)
    } catch ({error, message}) {
        next ({error, message})
    }
})

// Create new inventory item
// Body requires productId, sizeId and stock qty
inventoryRouter.post('/', async (req, res, next) => {
    const { productId, sizeId, stock } = req.body;
    const user = req.user;
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const newInventoryItem = await createInventoryItem({productId, sizeId, stock})

        res.send(newInventoryItem)
    } catch ({error, message}) {
        next ({error, message})
    }
})

// Patch stock for inventory item
// Body requires productId, sizeId, and count (from cart/order)
inventoryRouter.patch('/:productId', async (req, res, next) => {
    const { productId } = req.params;
    const { sizeId, count } = req.body;

    try {
        const updatedInventoryItem = await updateStockByProductIdAndSize({productId, sizeId, count})
        res.send(updatedInventoryItem)
    } catch ({error, message}) {
        next ({error, message})
    }
})

export { inventoryRouter }