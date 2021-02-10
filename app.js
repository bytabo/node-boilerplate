const express = require('express');
const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/items', itemsRouter);
app.use('/users', usersRouter);

module.exports = app;
