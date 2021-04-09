const mongoose = require('mongoose');

const Item = mongoose.model('Item', {
    name: String,
    description: String,
    isChecked: Boolean,
    listIndex: Number,
    isImportant: Boolean,
}, {
    collection: `items_${process.env.NODE_ENV === 'production' ? 'live' : 'test'}`,
});

module.exports = Item;
