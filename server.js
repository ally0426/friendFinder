const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
  console.log(`The server is starting on port ${PORT}`);
}