import Square from './Square.js'
import React, { useState } from 'react'

function Row(props) {
    // Regular expression to check valid input, Wordle is only played with letters.
    const pattern = new RegExp('[a-zA-Z]')

    function checkSquare(square, event) {
        // Returns the correct value to update the square to, null if character is not valid (see variable pattern).

        if (square === '') {
            if (!pattern.test(event.target.value)) {
                console.log('square is blank and test failed')
                return ''
            }
            var newChar = event.target.value
            return newChar
        } else {
            var newChar = event.target.value[1]
            if (!pattern.test(newChar)) {
                console.log('square is not blank and test failed')
                return ''
            }
            return newChar
        }
    }

    return (
        <div>
            <Square value={props.row[0]} idx={0} onChange={props.onChange} />
            <Square value={props.row[1]} idx={1} onChange={props.onChange} />
            <Square value={props.row[2]} idx={2} onChange={props.onChange} />
            <Square value={props.row[3]} idx={3} onChange={props.onChange} />
            <Square value={props.row[4]} idx={4} onChange={props.onChange} />
        </div>
    )
}

export default Row
