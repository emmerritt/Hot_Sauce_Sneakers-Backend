import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const router = express.Router();

router.use((req, res, next) => {
    console.log("A request is being made to the Hot Sauce Sneakers API")

    res.send({message: `Welcome to Hot Sauce Sneakers DB!`});
})

export default router;