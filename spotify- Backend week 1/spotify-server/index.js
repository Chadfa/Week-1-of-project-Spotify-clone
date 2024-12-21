// Required packages
require("dotenv").config(); // To use environment variables from .env file
require("express-async-errors"); // To handle async errors more easily
const express = require("express");
const cors = require("cors"); // For enabling Cross-Origin Resource Sharing (CORS)
const connection = require("./db"); // Database connection file
const userRoutes = require("./routes/users"); // Routes for users
const authRoutes = require("./routes/auth"); // Routes for authentication
const songRoutes = require("./routes/songs"); // Routes for songs
const playListRoutes = require("./routes/playLists"); // Routes for playlists
const searchRoutes = require("./routes/search"); // Routes for search

// Initialize Express app
const app = express();

// Establish database connection
connection();

// Middleware Setup
app.use(cors()); // Enables CORS for cross-origin requests
app.use(express.json()); // Parses incoming JSON requests

// Route Setup
app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/songs/", songRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/", searchRoutes);

// Default port setup, fallback to 8080 if not defined in .env
const port = process.env.PORT || 8080;

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

