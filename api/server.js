const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const usersRouter = require("./users/users-router");
const classesRouter = require("./classes/classes-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/classes", classesRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(`
    <h1>Anywhere Fitness API</h1>
    <h4>Availible Resources</h4>
    <ul>
        <li>/api/users</li>
        <li>/api/classes</li>
    </ul>
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
