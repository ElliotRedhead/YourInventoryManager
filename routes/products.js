var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function(req, res) {
    db.Product.findAll()
        .then( products => {
            res.status(200).send(JSON.stringify(products));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function(req, res) {
    db.Product.findByPk(req.params.id)
        .then( product => {
            res.status(200).send(JSON.stringify(product));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function(req, res) {
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
});

router.delete("/:id", function(req, res) {
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
});

module.exports = router;