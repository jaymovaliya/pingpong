const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
dotenv.config();

const games = require('./api/games');

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = require('http').createServer(app);
server.listen(port);

app.use(express.static(path.join(__dirname, '../build')));

(async () => {
    try {
        console.log(process.env.DB);
        await mongoose.connect(process.env.DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log("connected to database");
        app.use('/games', games());

    } catch (e) {
        console.error('Cannot connect to database', e);
        process.exit(1);
    }
})();

module.exports = app;