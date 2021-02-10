const mongoose = require('mongoose');

const Item = mongoose.model('Item', {
    name: String,
    description: String,
    isChecked: Boolean,
    listIndex: Number,
    isImportant: Boolean,
});

module.exports = Item;
