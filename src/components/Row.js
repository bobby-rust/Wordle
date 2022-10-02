import Square from './Square.js'
import React, { useState } from 'react'

function Row() {

    const [square1State, setSquare1State] = useState("")
    const [square2State, setSquare2State] = useState("")
    const [square3State, setSquare3State] = useState("")
    const [square4State, setSquare4State] = useState("")
    const [square5State, setSquare5State] = useState("")

    const pattern = new RegExp('[a-zA-Z]')

    function checkSquare(square, event) {
        // returns the correct value to update the square to, null if character is not valid (see var pattern)

        // console.log(event.target.value)
        // console.log(square)
        if (square === "") {
            if (!pattern.test(event.target.value)) {
                console.log("square is blank and test failed")
                return ""
            }
            var newChar = event.target.value
            return newChar
        } else {
            var newChar = event.target.value[1]
            if (!pattern.test(newChar)) {
                console.log("square is not blank and test failed")
                return ""
            }
            return newChar
        }
    }

    function updateSquare1State(event) {
        console.log(checkSquare(square1State, event))
        setSquare1State(checkSquare(square1State, event))
        // console.log(square1State)
    }
    function updateSquare2State(event) {
        setSquare2State(checkSquare(square2State, event))
        // console.log(square2State)
    }
    function updateSquare3State(event) {
        setSquare3State(checkSquare(square3State, event))
        // console.log(square3State)
    }
    function updateSquare4State(event) {
        
        setSquare4State(checkSquare(square4State, event))
        // console.log(square4State)
    }
    function updateSquare5State(event) {
        setSquare5State(checkSquare(square5State, event))
        // console.log(square5State)
    }

    return (
        <div>
            <Square value={square1State} onChange={updateSquare1State}/>
            <Square value={square2State} onChange={updateSquare2State}/>
            <Square value={square3State} onChange={updateSquare3State}/>
            <Square value={square4State} onChange={updateSquare4State}/>
            <Square value={square5State} onChange={updateSquare5State}/>
        </div>
    )

}

export default Row;

