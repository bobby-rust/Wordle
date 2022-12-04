import { useState } from 'react'

function Square(props) {
    if (props.data) {
        return (
            <div className={props.data.class}>
                <div className='text-wrapper'>{props.data.letter}</div>
            </div>
        )  
    }
    else {
        return (
            <div className="square-default"> </div>
        )
        
    }
}

export default Square

