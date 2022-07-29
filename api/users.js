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
  getUserByUsername,
} from "../db/users.js";
import { getUserOrderHistory } from "../db/order_histories.js";
import { getCartItemsByUserId } from "../db/carts.js";

// Register new user
router.post("/register", async (req, res, next) => {
  try {
    if (await getUserByEmail({ email: req.body.email })) {
      res.status(400).json({ message: "Email address already in use." });
    }

    const user = await createUser({
      email: req.body.email,
      password: req.body.password,
      username: "",
    });

    res.status(200).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
});

// Login user
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next({
      error: "Missing email or password for login",
      name: "MissingCredentialsError",
      message: "Please submit both an email and password to login.",
    });
  }

  try {
    const user = await verifyPassword({ email, password });

    if (!user) {
      next({
        error: "Invalid Login Credentials",
        name: "InvalidLoginError",
        message:
          "Username and password do not match. Please try check the password and try again.",
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
  } catch ({ error, name, message }) {
    next({ error, name, message });
  }
});

router.get("/:username/orderhistory", async (req, res, next) => {
  try {
    console.log("username: ", req.params.username);
    // const history = [];
    const history = await getUserOrderHistory(req.params.username);
    res.send({ message: "Orders fetched successful!", data: history });
  } catch (error) {
    console.log(error);
    next({ error: error.error, name: error.name, message: error.message });
  }
});

router.get("/:username/cart", async (req, res, next) => {
  try {
    console.log("username: ", req.params.username);
    const userDetails = await getUserByUsername(req.params.username);
    // const history = [];
    const cartItems = await getCartItemsByUserId(userDetails.id);
    res.send({ message: "Cart items fetched successful!", data: cartItems });
  } catch (error) {
    console.log(error);
    next({ error: error.error, name: error.name, message: error.message });
  }
});

export default router;
