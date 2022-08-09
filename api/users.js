import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { JWT_SECRET } = process.env;
import {
  getUserByEmail,
  createUser,
  verifyPassword,
  getUserById,
} from "../db/users.js";
import { getCartItemsByUserId } from "../db/carts.js";
import { getOrdersByUserId } from "../db/index.js";

// Register new user
router.post("/register", async (req, res, next) => {
  try {
    if (await getUserByEmail({ email: req.body.email })) {
      res.status(400).json({ message: "Email address already in use." });
      return;
    }

    const user = await createUser({
      email: req.body.email,
      password: req.body.password,
      username: "",
    });

    res.status(200).json({ message: "Signup successful!" });
  } catch ({ error, message }) {
    res.status(500).json({ message: "Something went wrong." });
    next({ error, message });
  }
});

// Login user
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next({
      error: "Missing email or password for login",
      message: "Please submit both an email and password to login.",
    });
  }

  try {
    const user = await verifyPassword({ email, password });

    if (!user) {
      next({
        error: "Invalid Login Credentials",
        message:
          "Username and password do not match. Please try check the password and try again.",
      });
    }

    if (!user.isActive) {
      next({
        error: "User Has Been Deactivated",
        message:
          "This user account has been deleted. Contact a site administrator for more info.",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email,
      },
      JWT_SECRET,
      {
        expiresIn: "1w",
      }
    );

    res.send({
      message: "Welcome, you're now logged in!",
      token: token,
      user: user,
    });
  } catch ({ error, message }) {
    next({ error, message });
  }
});

// Get user's order history
router.get("/:userId/orderhistory", async (req, res, next) => {
  const { userId } = req.params;
  try {
    const history = await getOrdersByUserId(userId);
    res.send({ message: "Orders fetched successful!", data: history });
  } catch ({ error, message }) {
    next({ error, message });
  }
});

// Get user's current cart
router.get("/:userId/cart", async (req, res, next) => {
  const { userId } = req.params;
  try {
    const cartItems = await getCartItemsByUserId(userId);
    res.send({ message: "Cart items fetched successful!", data: cartItems });
  } catch (error) {
    console.log(error);
    next({ error: error.error, name: error.name, message: error.message });
  }
});

export default router;
