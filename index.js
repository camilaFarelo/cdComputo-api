require('@babel/register');
require("@babel/polyfill");

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.header("Accept", "application/json");
  res.header("Content-type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen('3000')