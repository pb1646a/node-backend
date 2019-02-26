const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbUrl = process.env.DB_URI;
mongoose.set('useCreateIndex', true);

mongoose
  .connect(
    dbUrl,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("connection failed");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS, PUT"
  );

  next();
});


module.exports = app;
