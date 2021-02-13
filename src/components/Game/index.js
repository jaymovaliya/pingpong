import React, { memo, useState } from "react";
import { Card } from "../../Core-UI";
import "./styles.scss";

function Game(props){
    const { params } = props.location;
    const [player1Cnt, setPlayer1Cnt] = useState(0);
    const [player2Cnt, setPlayer2Cnt] = useState(0);

    let currentWinner = "-";
    if(player1Cnt > player2Cnt){
        currentWinner = params.player1;
    } else if(player2Cnt > player1Cnt){
        currentWinner = params.player2;
    }
    if(!params){
        return null;
    }
    return (
        <div className="Game">
            <Card>
                <div className="title">Game</div>
                <div className="player-group">
                    <div className="label">{params.player1}</div>
                    <button onClick={()=>setPlayer1Cnt(player1Cnt + 1)}>Add win</button>
                </div>
                <div className="player-result">
                    <span className="win-txt">Win</span>
                    <span className="player-cnt">{player1Cnt}</span>
                </div>
                <div className="player-group">
                    <div className="label">{params.player2}</div>
                    <button onClick={()=>setPlayer2Cnt(player2Cnt + 1)}>Add win</button>
                </div>
                <div className="player-result">
                    <span className="win-txt">Win</span>
                    <span className="player-cnt">{player2Cnt}</span>
                </div>
                <div className="player-summary">
                    <div className="summary-wrapper">
                        <span className="result-title">Current Winner: </span>
                        <span className="result-index">{currentWinner}</span>
                    </div>
                    <div className="summary-wrapper">
                        <span className="result-title"> Win Difference: </span>
                        <span className="result-index">{Math.abs(player1Cnt - player2Cnt)}</span>
                    </div>
                </div>
                <div className="button-container">
                <button className="submit-btn">
                    Save Game
                </button>
                </div>
            </Card>
        </div>
    )
}

export default memo(Game);