import { useState } from 'react'

function Square(props) {
    if (props.data) {
        // console.log("row1state in square: ", props.data)
        return (
            <div onChange={props.onChange} className={props.data.class}>
                {props.data.letter}
            </div>
        )  
    }
    else {
        return (
            <div onChange={props.onChange} className="square-default"></div>
        )
        
    }
}

export default Square

