const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/public"));


const today = new Date();
const hour = today.getHours();
const day = today.getDay();


app.get("/", (req, res) => {
  if (hour < 9 || hour > 17 || 0 == day || day == 6) {
    res.sendFile(path.join(__dirname, "public", "close.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "home.html"));
  }
});

app.get("/ourservice", (req, res) => {
  if (hour < 9 || hour > 17 || 0 == day || day == 6) {
    res.sendFile(path.join(__dirname, "public", "close.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "ourservice.html"));
  }
});

app.get("/contact", (req, res) => {
  if (hour < 9 || hour > 17 || 0 == day || day == 6) {
    res.sendFile(path.join(__dirname, "public", "close.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
