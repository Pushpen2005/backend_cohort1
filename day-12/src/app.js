const express = require('express');
const app = express();
const authRouter = require('./routes/auth.route');

// Middleware to parse JSON bodies
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use("/api/auth", authRouter);

module.exports = app;