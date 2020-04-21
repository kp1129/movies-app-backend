const express = require('express');
const helmet = require('helmet');
const authRouter = require('./auth/authRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/auth", authRouter);

server.get("/api", (req, res) =>{
    res.status(200).json({ message: "api says hi" })
})

module.exports = server;