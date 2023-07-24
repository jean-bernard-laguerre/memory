import React from "react";
import "../../style/components/Card.css"

function Card(props) {
    return <>
        <div onClick={props.handleClick}  className="Card-container">
            <div className={`Card State${props.state}`}>
                <div className="Card-Face Back">
                    <h1>?</h1>
                </div>
                <div className="Card-Face Front">
                    <h1>{props.value}</h1>
                </div>
            </div>
        </div>
    </>
}

export default Card;