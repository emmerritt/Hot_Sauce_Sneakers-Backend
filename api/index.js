import dotenv from "dotenv";
dotenv.config();
import express from "express";
import usersRoutes from "./users.js";
const router = express.Router();
import { productRouter } from './products.js'

router.use('/products', productRouter)

router.use("/users", usersRoutes);

// router.use((req, res, next) => {
//   console.log("A request is being made to the Hot Sauce Sneakers API");

//   res.send({ message: `Welcome to Hot Sauce Sneakers DB!` });
// });

export default router;
