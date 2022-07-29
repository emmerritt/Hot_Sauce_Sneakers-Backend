import express from "express";
const router = express.Router();
import { 
    createCartItem,
    getCartItemsByUserId,
    updateCartItemCount,
    removeCartItem } from "../db/carts.js";

// GET /api/cart
router.get('/', async (req, res, next) => {
    try {
        if(req.user) {
            const cart = await getCartItemsByUserId(req.user.id);
            res.send(cart);
        }
        else {
            next({
                error: 'Unauthorized Error',
                message: 'You must be logged in to perform this action!'
            })
        }
    }
    catch({error, message}) {
        next({error, message});
    }
});

// POST /api/cart
router.post('/', async (req, res, next) => {
    const { inventoryId, count } = req.body;

    try {
        if(req.user) {
            const cart = await createCartItem({userId: req.user.id, inventoryId, count});
            res.send(cart);
        }
        else {
            next({
                error: 'Unauthorized Error',
                message: 'You must be logged in to perform this action!'
            })
        }
    }
    catch({error, message}) {
        next({error, message});
    }
});

// PATCH /api/cart
router.patch('/', async (req, res, next) => {
    const { inventoryId, count } = req.body;

    try {
        if(req.user) {
            const cart = await updateCartItemCount({userId: req.user.id, inventoryId, count});
            res.send(cart);
        }
        else {
            next({
                error: 'Unauthorized Error',
                message: 'You must be logged in to perform this action!'
            })
        }
    }
    catch({error, message}) {
        next({error, message});
    }
});

// DELETE /api/cart
router.delete('/', async (req, res, next) => {
    const { inventoryId } = req.body;

    try {
        if(req.user) {
            const cart = await removeCartItem({userId: req.user.id, inventoryId});
            res.send(cart);
        }
        else {
            next({
                error: 'Unauthorized Error',
                message: 'You must be logged in to perform this action!'
            })
        }
    }
    catch({error, message}) {
        next({error, message});
    }
});

export default router;