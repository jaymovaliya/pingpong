const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const games = require('./api/games');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../build')));
app.use('/games', games());

module.exports = app;