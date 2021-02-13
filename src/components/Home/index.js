import React, { memo, useState } from "react";
import { Card } from "../../Core-UI";
import "./styles.scss";

function Home(props){

    const [player1, setPlayer1] = useState("");
    const [player1Err, setPlayer1Err] = useState(false);
    const [player2, setPlayer2] = useState("");
    const [player2Err, setPlayer2Err] = useState(false);

    const goToGame = () => {
        if(player1.length && player2.length){
            props.history.push({
                pathname: 'game',
                params: {
                    player1: player1,
                    player2: player2
                }
            })
        } else {
            if(!player1.length){
                setPlayer1Err(true);
            }
            if(!player2.length){
                setPlayer2Err(true);
            }
        }
    }

    return (
        <div className="Home">
            <Card>
                <div className="title">Ping Pong</div>
                <div className="form-group">
                    <div className="label">Player 1 name</div>
                    <input className="input-label" type="text" value={player1} onChange={(e)=>setPlayer1(e.target.value)}/>
                    <div className="input-error" style={{color: player1Err ? "red": "gray"}}>* Required</div>
                </div>
                <div className="form-group">
                    <div className="label">Player 2 name</div>
                    <input className="input-label" type="text" value={player2} onChange={(e)=>setPlayer2(e.target.value)}/>
                    <div className="input-error" style={{color: player2Err ? "red": "gray"}}>* Required</div>
                </div>
                <div className="button-container">
                    <button className="submit-btn" onClick={goToGame}>
                        Continue
                    </button>
                </div>
            </Card>
        </div>
    )
}

export default memo(Home);