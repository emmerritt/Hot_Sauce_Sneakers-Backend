import dotenv from "dotenv";
dotenv.config();
import express from "express";
import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;
const router = express.Router();

import usersRoutes from "./users.js";
import { productRouter } from './products.js'
import { getUserById } from '../db/index.js'


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
        } catch ({ error, name, message }) {
            next({ error, name, message });
        }
    } else {
        next({
            error: 'Malformed Authorization Header',
            name: 'AuthorizationError',
            message: `Authorization token must start with ${ prefix }`
        });
    }
});

// Feature Routers

// /api/users
router.use('/users', usersRoutes);
// /api/products
router.use('/products', productRouter);


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
})

// Error handling
router.use((error, req, res, next) => {
    res.send({
        error: error.error,
        name: error.name,
        message: error.message
    });
});

export default router;
