const express = require("express");
const app = express();
const User = require("./models/user");
const connectDB = require("./connection");
connectDB();
const router = require("./router/router");

app.use(express.json());
app.use("/api/users", router);


app.listen(5000, () => console.log("server running.."));
