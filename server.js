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

// Connect to MonogDB
connectDB();

app.get("/", (req, res) => res.send("<h1>Welcome to the DEVchat Forum</h1>"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
