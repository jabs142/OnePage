require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");

const UserController = require("./controllers/UserController")
const path = require("path")

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

app.use(cors())
app.use(express.json())

app.use("/api/user", UserController)

app.use(express.static("../client/dist"));


app.get("/", (req, res) => {
    res.send("Hello World!");
});

// app.get("/*", (req, res) => {
//     res.sendFile(path.resolve("../client/dist/index.html"));
//   });
  
  mongoose.connection.once("open", () => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  });