require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/user/user.router");

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to tem2 backend");
});

app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("TEM2 node is running in port:", process.env.APP_PORT);
});
