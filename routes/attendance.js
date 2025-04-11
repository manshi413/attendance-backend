const express = require("express");
const { markAttendance, getAttendance } = require("../controllers/attendanceController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

// Route to mark attendance
router.post("/mark", authMiddleware, markAttendance);

// Route to get attendance records
router.get("/", authMiddleware, getAttendance);

module.exports = router;