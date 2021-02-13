const router = require('express').Router();
const Games = require("../../models/games");

module.exports = () => {

    // POST /games/store
    router.post('/store', async (req, res) => {
        try {
            const { player1, player2, player1Score, player2Score, winner, margin } = req.body;
            const game = new Games({
                player1,
                player2,
                player1Score,
                player2Score,
                winner,
                margin
            });
            await game.save();
            res.status(200).json({message: "Game Stored Successfully"});
        } catch (e) {
            console.error(e);
            res.status(500).json({message: e.message});
        }
    });
    return router;
};