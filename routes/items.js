const express = require('express');

const router = express.Router();
const Item = require('../models/item.mongoose');

// CREATE
router.post('/create', async (req, res) => {
    const newItem = new Item(req.body.item);
    await newItem.save();
    res.send('Item created!');
});

// READ
router.get('/', async (req, res) => {
    const allItems = await Item.find({});
    res.json(allItems);
});

router.get('/:id', async (req, res) => {
    const itemById = await Item.findById(req.params.id);
    res.json(itemById);
});

// UPDATE
router.put('/update/:id', async (req, res) => {
    try {
        const newItem = new Item(req.body.item);
        await Item.findOneAndUpdate({ _id: req.params.id }, newItem);
        res.send('Updated item!');
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

// DELETE
router.delete('/delete/:id', async (req, res) => {
    await Item.deleteOne({ _id: req.params.id });
    res.send('Item deleted!');
});

module.exports = router;
