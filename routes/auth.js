const express = require("express");
const { signUp, login } = require("../controllers/authController");
const router = express.Router();

// Route to handle user signup
router.post("/signup", signUp);

// Route to handle user login
router.post("/login", login);

module.exports = router;