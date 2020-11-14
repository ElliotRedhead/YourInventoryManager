var express = require("express");
var passport = require("passport");
var bcrypt = require("bcrypt");

var router = express.Router();

router.get("/signup", function(request,response){
	response.status(200).send("Message received");
});

router.post("/signup", (request, response) => {
	console.log(request.body);
	response.send(request.body)
});

module.exports = router
