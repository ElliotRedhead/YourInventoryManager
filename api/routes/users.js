var express = require("express");
var passport = require("passport");
var bcrypt = require("bcrypt");

var router = express.Router();

router.get("/signup", function(request,response){
	response.status(200).send("Message received");
});

router.post("/signup", function(request, response) {
	console.log(request);
	response.send("A post request was received.")
});

module.exports = router
