const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const homeRouter = require("./routes/home");
const productsRouter = require("./routes/products");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(require("body-parser").urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/products", productsRouter);

module.exports = app;
