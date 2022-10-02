import { useState } from 'react';


function Square(props) {
    return ( 
        <input type="text" value={props.value} onChange={props.onChange} className="square"/>
        )
}
    
export default Square;












// const pattern = new RegExp('[a-zA-Z]')
// function updateSquare(event) {
    // if (square === "") {
        //     if (!pattern.test(event.target.value)) {
        //         console.log("square is blank and test failed")
        //         return
        //     }
        // }
        // var newChar = event.target.value[1]
        // if (!pattern.test(newChar)) {
        //         console.log(newChar)
        //         console.log("square is not blank and test failed")
        //         return
        //     }

        
        // if (event.target.value.length > 1) {
        //     setSquare(newChar)
        // } else {
        //     setSquare(event.target.value)
        // }
    
    // }