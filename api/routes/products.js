var express = require("express");
var router = express.Router();
var db = require("../database");

/**
 * Get all products owned by the user.
 */
router.get("/all", function(req, res) {
	if (req.isAuthenticated()){
		db.Product.findAll({
			where: {
				"User.id": req.user.id
			}
		})
			.then( products => {
				res.status(200).send(JSON.stringify(products));
			})
			.catch( err => {
				res.status(500).send(JSON.stringify(err));
			});
	} else {
		res.send("Not authenticated, access is blocked.");
	}
});

/**
 * Get a product that has a specific id.
 */
router.get("/:id", function(req, res) {
	if (req.isAuthenticated()) {
		db.Product.findByPk(req.params.id)
			.then( product => {
				res.status(200).send(JSON.stringify(product));
			})
			.catch( err => {
				res.status(500).send(JSON.stringify(err));
			});
	}
});

/**
 * Create a product with the parameters passed.
 */
router.put("/", function(req, res) {
	if (req.isAuthenticated()) {
		db.Product.create({
			name: req.body.name,
			quantity: req.body.quantity,
			expiryDate: req.body.expiryDate,
			storageLocation: req.body.storageLocation,
			freezable: req.body.freezable,
			id: req.body.id
		})
			.then( product => {
				res.status(200).send(JSON.stringify(product));
			})
			.catch( err => {
				res.status(500).send(JSON.stringify(err));
			});
	}
});

/**
 * Delete a product, based on product ID.
 */
router.delete("/:id", function(req, res) {
	if (req.isAuthenticated()){
		db.Product.destroy({
			where: {
				id: req.params.id
			}
		})
			.then( () => {
				res.status(200).send();
			})
			.catch( err => {
				res.status(500).send(JSON.stringify(err));
			});
	}
});

module.exports = router;