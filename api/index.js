import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;
const router = express.Router();

import usersRoutes from './users.js';
import { productRouter } from './products.js';
import { inventoryRouter } from './inventory.js';
import { adminRouter } from './admin.js';
import { brandsRouter } from './brands.js';
import { sizesRouter } from './sizes.js';
import { ordersRouter } from './orders.js';
import cartRouter from './cart.js';

import { getUserById } from '../db/index.js';


// Authorize and attach current user to request
router.use(async (req, res, next) => {
    const prefix = 'Bearer';
    const auth = req.header('Authorization');
    
    if (!auth) {
        next();
    } else if (auth.startsWith(prefix)) {
        const token = auth.slice(prefix.length + 1);
        
        try {
            const userDetails = jwt.verify(token, JWT_SECRET);
            
            if (userDetails) {
                req.user = await getUserById(userDetails);
                next();
            }
        } catch ({ error, message }) {
            next({ error, message });
        }
    } else {
        next({
            error: 'Malformed Authorization Header',
            message: `Authorization token must start with ${ prefix }`
        });
    }
});

// Feature Routers

// /api/users
router.use('/users', usersRoutes);
// /api/products
router.use('/products', productRouter);
// /api/inventory
router.use('/inventory', inventoryRouter);
// /api/brands
router.use('/brands', brandsRouter);
// /api/sizes
router.use('/sizes', sizesRouter);
// /api/admin
router.use('/admin', adminRouter);
// /api/cart
router.use('/cart', cartRouter);
// /api/orders
router.use('/orders', ordersRouter);


// Server health check
router.get('/health', async (req, res, next) => {
    res.send({
        message: 'Hot Sauce Sneakers server is up and running.'
    });
});

// 404 Error
// Page doesn't exist
router.use((req, res, next) => {
    res.status(404);
    res.send({message: `This page does not exist.`});
});

// Error handling
router.use((error, req, res, next) => {
    res.send({
        error: error.error,
        message: error.message
    });
});

export default router;
