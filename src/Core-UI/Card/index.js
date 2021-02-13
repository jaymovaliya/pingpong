import React, { memo } from "react";
import "./styles.scss";

function Card(props){
    return (
        <div className="Card">
            {props.children}
        </div>
    )
}

export default memo(Card);