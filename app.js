// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // To use environment variables from a .env file

// Initialize the Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors());         // Enable Cross-Origin Resource Sharing

// Environment variables
const PORT = process.env.PORT || 5000; // Default port is 5000 if not provided in .env
const MONGO_URI = process.env.MONGO_URI; // MongoDB connection string from .env

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Attendance Marking Backend!');
});

// Example of an attendance route (to be expanded as needed)
app.use('/api/attendance', require('./routes/attendance'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});