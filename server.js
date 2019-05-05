/**
 * server.js               -Main entry point to the application
 * @author                  Ratna Lama
 * @author
 * @author
 * @author
 * @author
 * @author
 *
 * @description             Main entry point
 */

const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to the cloud MonogDB Atlas
connectDB();

// Init Middleware - BodyParser - included with express
app.use(express.json({ extended: false }));

// Home page
app.get("/", (req, res) => res.send("<h1>Welcome to the DEVchat Forum</h1>"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Listen to port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
