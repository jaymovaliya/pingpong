const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    player1: { type: String},
    player2: { type: String},
    player1Score: { type: Number},
    player2Score: { type: Number},
    winner: { type: String},
    margin: { type: Number}
}, { timestamps: true});

module.exports = mongoose.model('Games', gameSchema, 'games');