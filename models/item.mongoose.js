const mongoose = require('mongoose');

const collectionName = `items_${process.env.NODE_ENV === 'production' ? 'live' : 'test'}`;

const Item = mongoose.model('Item', {
    name: String,
    description: String,
    isChecked: Boolean,
    listIndex: Number,
    isImportant: Boolean,
}, collectionName);

module.exports = Item;
