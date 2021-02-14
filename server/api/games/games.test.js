const chai = require('chai');
const request = require('supertest');
const app = require("../../app");
const db = require("../../db");
const expect = chai.expect;

describe('Check Game API', () => {
    before((done) => {
        db.connect()
          .then(() => done())
          .catch((err) => done(err));
        })
    after((done) => {
        db.close();
        done();
    })
    it('should store game', (done) => {
        const gameData = {
            player1: "Test1",
            player2: "Test2",
            player1Score: 5,
            player2Score: 8,
            winner: "Test2",
            margin: 3
        }
        request(app)
        .post('/games/store')
        .send(gameData)
        .expect(200)
        .end((err,res)=>{
            if(!err){
                expect(res.body.message).to.be.equal("Game Stored Successfully");
                done();
            }
        })
    })
})