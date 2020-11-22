var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt");
var db = require("../database");
// Use more salt rounds in production for greater security.
const saltRounds = 10;

var router = express.Router();




passport.use("login", new LocalStrategy(
	function(username, password, done) {
		db.User.findOne({where: { username: username }}).then(function(user) {
			if(user){
				bcrypt.compare(password,user.password)
					.then(result => {
						if(result){
							return done(null,user);
						}
					});
			} else if(!user){
				return done(null,false);
			}
		});
	}
));

router.get("/register", function(request,response){
	response.status(200).send("Message received");
});

router.post("/register", function (request, response) {
	db.User.findOne({
		where:
			db.sequelize.or(
				{username: request.body.username},
				{email: request.body.email}
			)
	}).then(function(user){
		if(!user) {
			bcrypt.hash(request.body.password, saltRounds, function (error, hash) {
				db.User.create({
					username: request.body.username,
					email: request.body.email,
					password: hash
				});
			});

			response.send("User creation successful.");
		} else {
			if(user["username"] === request.body.username){
				response.send("An account with that username already exists.");
			}
			else if (user["email"] === request.body.email){
				response.send("An account with that email already exists.");
			}
		}
	})
		.catch(function(error){
			console.log(error);
		});
});

router.post("/login", passport.authenticate("login", {
	successRedirect: "/",
	failureRedirect: "/login",
	failureFlash: true
})
);

module.exports = router;
