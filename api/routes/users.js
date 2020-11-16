var express = require("express");
var passport = require("passport");
var bcrypt = require("bcrypt");
var db = require("../database");
// Use more salt rounds in production for greater security.
const saltRounds = 10;

var router = express.Router();

router.get("/signup", function(request,response){
	response.status(200).send("Message received");
});

router.post("/signup", function (request, response) {
	bcrypt.hash(request.body.password, saltRounds, function (error, hash) {
		db.User.create({
			username: request.body.username,
			email: request.body.email,
			password: hash
		})
	})

	response.send("User creation successful.")
});

module.exports = router
