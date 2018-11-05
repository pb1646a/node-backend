const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://pb1646a:Omonoialaos20!@cluster0-t3noz.mongodb.net/node-angular?retryWrites=true"
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
//app.use('/api/posts',postsRoutes)


module.exports = app;
