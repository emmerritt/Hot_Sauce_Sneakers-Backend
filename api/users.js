import express from "express";
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv  from "dotenv"
dotenv.config()
const { JWT_SECRET } = process.env;
import { getUserByEmail, createUser, verifyPassword } from "../db/users.js";

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
  const {email, password} = req.body;

  if (!email || !password) {
    next({
        error: "Missing email or password for login",
        name: "MissingCredentialsError",
        message: "Please submit both an email and password to login."
    });
  }

  try {
    const user = await verifyPassword({email, password})

    if (!user) {
        next({
            error: 'Invalid Login Credentials',
            name: 'InvalidLoginError',
            message: 'Username and password do not match. Please try check the password and try again.'
        })
    }

    const token = jwt.sign(
        { 
          id: user.id, 
          email
        }, 
        JWT_SECRET, 
        { 
          expiresIn: '1w'
        }
    );

    res.send({
        message: "Welcome, you're now logged in!",
        token: token,
        user: user
    })

  } catch ({error, name, message}) {
      next ({error, name, message})
  }
})

export default router;
