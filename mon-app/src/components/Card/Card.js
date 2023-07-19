import React from "react";

function Card(props) {
    return <>
        {(props.state === 0 ) ?
            (
                <div onClick={props.handleClick} className="Card Back">
                    <h1>?</h1>
                </div>
            )
            :
            (
                <div onClick={props.handleClick} className="Card Front">
                    <h1>{props.value}</h1>
                </div>
            )
        }
    </>
}

export default Card;