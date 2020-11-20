require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const expressSession = require("express-session");
const db = require("./database");

const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.text({extended:true}));
app.use(cookieParser());

app.use(expressSession({
	secret: "rfk3r9hfw2",
	resave: false,
	saveUninitialized: false,
}));	

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, callback) {
	callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
	db.User.findById(id, function (error, user) {
		if (error) { return callback(error); }
		callback(null, user);
	});
});

app.use("/users", usersRouter);
app.use("/products", productsRouter);

if(process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname.replace("/api","/client/build")));
	app.get("*", (req, res) => {    res.sendFile(__dirname.replace("api","client/build/index.html"));  });
}



module.exports = app;
