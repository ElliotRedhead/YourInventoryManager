require('dotenv').config()
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const productsRouter = require("./routes/products");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(require("body-parser").urlencoded({extended:true}));
app.use(cookieParser());

app.use("/products", productsRouter);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname.replace('/api','/client/build')));
  app.get('*', (req, res) => {    res.sendFile(__dirname.replace('api','client/build/index.html'));  })
}



module.exports = app;
