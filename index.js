/** @format */

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
   res.send("Cyclic Starts");
});

app.listen(port, () => console.log("Server running in port 5000"));
