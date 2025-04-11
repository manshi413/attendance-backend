const Attendance = require("../models/Attendance");

// Mark attendance controller
const markAttendance = async (req, res) => {
  try {
    const { studentId, date, status } = req.body;

    // Create a new attendance record
    const newAttendance = new Attendance({ studentId, date, status });
    await newAttendance.save();

    res.status(201).json({ message: "Attendance marked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error marking attendance", error });
  }
};

// Get attendance records controller
const getAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().populate("studentId", "name email");
    res.status(200).json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance records", error });
  }
};

module.exports = { markAttendance, getAttendance };