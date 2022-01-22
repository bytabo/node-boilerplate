const express = require('express');

const router = express.Router();
const Item = require('../../models/item.mongoose');

router.route('/')
    .get(async (req, res) => {
        try {
            const allItems = await Item.find({});
            res.json(allItems);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    })
    .post(async (req, res) => {
        try {
            const newItem = new Item(req.body.item);
            const createdItem = await newItem.save();
            res.json(createdItem);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const itemById = await Item.findById(req.params.id);
            res.json(itemById);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    })
    .put(async (req, res) => {
        try {
            const newItem = new Item(req.body.item);
            const updatedItem = await Item.findOneAndUpdate({ _id: req.params.id }, newItem);
            res.json(updatedItem);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    })
    .delete(async (req, res) => {
        try {
            await Item.deleteOne({ _id: req.params.id });
            res.status(200).send();
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });

module.exports = router;

// @todo
// - json beautify in items.swagger.js
// - auth mit daniel abklären und dann ggf umsetzen
