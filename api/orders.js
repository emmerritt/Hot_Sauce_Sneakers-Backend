import express from "express";
const ordersRouter = express.Router();
import {
    createOrder,
    createOrderHistoryItem,
    getOrderByOrderId,
    updateOrderStatus
} from '../db/index.js'

// POST - Create new order, for user with userId
ordersRouter.post('/', async (req, res, next) => {
    const { id } = req.user;

    try {
        const newOrder = await createOrder({userId: id})

        res.send(newOrder)
    } catch ({error, message}) {
        next ({error, message})
    }
})

// GET - Get order details for an order by orderId
ordersRouter.get('/:orderId', async (req, res, next) => {
    const { orderId } = req.params

    try {
        const orderDetails = await getOrderByOrderId(orderId)

        res.send(orderDetails)
    } catch ({error, message}) {
        next ({error, message})
    }    
})

// PATCH - Update order status for an order, by orderId given a status
// Authentication - Must be logged in as an Admin user to update an order's status
ordersRouter.patch('/:orderId', async (req, res, next) => {
    const { orderId } = req.params;
    const { status } = req.body;
    const user = req.user;

    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const updatedOrder = await updateOrderStatus({orderId, status})

        res.send(updatedOrder)
    } catch ({error, message}) {
        next ({error, message})
    }  
})

// POST - Add item to user's order 
// Authentication - Must be signed in as that user to update their order
ordersRouter.post('/:orderId', async (req, res, next) => {
    const { orderId } = req.params;
    const { inventoryId, count, price } = req.body;
    const user = req.user;

    try {
        const orderDetails = await getOrderByOrderId(orderId)

        if (!user || user.id !== orderDetails.userId) {
            next({
                error: 'User Authentication Required',
                message: `You must be logged into this user's account to add a product to their order.`
            });
        }

        const newOrderItem = await createOrderHistoryItem({orderId, inventoryId, count, price})

        res.send(newOrderItem)
    } catch ({error, message}) {
        next ({error, message})
    }  
})

export { ordersRouter }