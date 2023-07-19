import React from 'react';

const Clock = (props) => {
    return <>
        <div className='Clock'>
            <p>
                {(Math.floor(props.time/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}
                :
                {(props.time % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}</p>
        </div>
    </>
}

export default Clock;