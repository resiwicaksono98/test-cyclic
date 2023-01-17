/** @format */

const express = require("express");
const app = express();
const port = 5000;
const db = require("./config/Database.js");

app.get("/", (req, res) => {
   res.send("Cyclic Starts Again");
});

db.on("open", function () {
   app.listen(port, () => console.log("Server running in port 5000"));
});
