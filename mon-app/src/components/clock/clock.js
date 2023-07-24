import React from 'react';
import "../../style/components/Clock.css"

const Clock = (props) => {
    return <>
        <div className='Clock'>
            <span className='Clock-digits'>
                {(Math.floor(props.time/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
            </span>
            :
            <span className='Clock-digits'>
                {(props.time % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
            </span>
        </div>
    </>
}

export default Clock;