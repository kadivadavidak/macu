const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors('localhost'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* Implement your routes here */
const data = require('./data.js');

app.use('/', function(req, res, next) {
    res.send(data);
})

module.exports = app;
