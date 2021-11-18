const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const usersRouter = require("./users/users-router");
const classesRouter = require("./classes/classes-router");
const authRouter = require("./auth/auth-router");
const { restricted } = require("./server-middleware");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/classes", classesRouter);
server.use("/api/users", restricted, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send(`
    <h1>Anywhere Fitness API</h1>
  `);
});

server.use("*", (req, res, next) => {
  next({ status: 404, message: "not found" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
