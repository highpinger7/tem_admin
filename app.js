require("dotenv").config();
const cors = require('cors');

const express = require("express");
const app = express();
const userRouter = require("./api/user/user.router");

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.get("/admin", (req, res) => {
  res.send("Welcome to tem2 backend");
});

app.use("/admin/users", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("TEM2 node is running in port:", process.env.APP_PORT);
});
