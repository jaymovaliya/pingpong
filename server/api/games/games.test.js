const chai = require('chai');
const request = require('supertest');
const app = require("../../index");
const expect = chai.expect;

describe('Check Game API', () => {
    before(done => {
        server = app.listen(3001, done);
    });
    it('should store game', () => {
        const gameData = {
            player1: "Test1",
            player2: "Test2",
            player1Score: 5,
            player2Score: 8,
            winner: "Test2",
            margin: 3
        }
        request(app)
        .post('games/store')
        .send(gameData)
        .expect(201)
        .then((res) => {
         expect(res.message).to.be.equal('Game Stored Successfully');
        })
        .catch((err)=>{
            console.error(err);
        });
    })
})