import express from "express";
import { getUserByEmail, createUser } from "../db/users.js";
const router = express.Router();

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

export default router;
