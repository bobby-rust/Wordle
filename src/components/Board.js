import Row from './Row.js'
import React from 'react'

function Board() {
    const [boardState, setBoardState] = React.useState({
        Row1: {
            square1: 'a',
            square2: 'b',
            square3: 'c',
            square4: 'd',
            square5: 'e',
        },
        Row2: {
            square1: 'f',
            square2: 'g',
            square3: 'h',
            square4: 'i',
            square5: 'j',
        },
        Row3: {
            square1: 'k',
            square2: 'l',
            square3: 'm',
            square4: 'n',
            square5: 'o',
        },
        Row4: {
            square1: 'p',
            square2: 'q',
            square3: 'r',
            square4: 's',
            square5: 't',
        },
        Row5: {
            square1: 'u',
            square2: 'v',
            square3: 'w',
            square4: 'x',
            square5: 'y',
        },
        Row6: {
            square1: 'z',
            square2: '1',
            square3: '2',
            square4: '3',
            square5: '4',
        },
    })

    const [row1State, setRow1State] = React.useState([])
    const [row2State, setRow2State] = React.useState(['f', 'g', 'h', 'i', 'j'])
    const [row3State, setRow3State] = React.useState(['k', 'l', 'm', 'n', 'o'])
    const [row4State, setRow4State] = React.useState(['p', 'q', 'r', 's', 't'])
    const [row5State, setRow5State] = React.useState(['u', 'v', 'w', 'x', 'y'])
    const [row6State, setRow6State] = React.useState(['z', '1', '2', '3', '4'])

    const deleteByIndex = index => {
        setRow1State(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
    }
    
    const pattern = new RegExp('[a-zA-Z]')
    function handleKeydown(event) {
        console.log("Hello from handleKeydown!")
        console.log(event.key)
        if (event.key === " " || event.key === "CapsLock" || !pattern.test(event.key)) return
        if (event.key === "Backspace") {
            console.log("event.key is backspace")
            deleteByIndex(row1State.length - 1)
        }
        else if (row1State.length < 5) {
            setRow1State([...row1State, event.key])
        }


    }
    // Only when the user presses Enter AND the current row is FULL should the row be moved on to the next row. 
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeydown)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    })

    
    
    
    function updateRowState(id, event) {}

    /*
     * -- Board Component --
     * Board component holds Board state and Row state
     * Board needs to render Rows,
     * Rows render Squares.
     * Does Board even need state??
     * Holds 6 rows.
     * One huge state variable ?? Probably not.
     * Board passes state down to Row.
     * Each row renders 5 squares with values of Row state passed down by board.
     * Row calls a function to update Board state with a 5 letter guess.
     * Need state for each individual Row, but that is not DRY
     * There must be a better way. Probably utilizing Array.map()
     * Cannot think of a better way. Just going to implement how I know and
     * worry about refactoring later.
     * Need an event listener which calls a function that
     * appends a letter to an array of length 5 which represents the row state.?
     * If the event is the Enter key from the event listener, board state should be updated?
     * But if its a letter, square state is updated.
     * Really, the Board ONLY needs to know what guess the user is on, and if the user has already won.
     * The Rows and Squares handle themselves.
     *
     * -- Row Component --
     * Row component holds square state
     * Row gets its state from Squares
     * Holds 5 squares.
     * Square state can be kept here?
     * Square only needs to update Row,
     * Row enters guess which lives in Board state.
     * Square calls a function to update Row state.
     * Need an array of 5 letters as a guess.
     *
     * -- Square Component --
     * Need an array of 6 guesses as state.
     * Updates when user enters a guess letter.
     * Updates as user types into squares.
     *
     * Need boolean game over state.
     *
     */
    return (
        <div className='board'>
            <Row row={row1State} id={1} onChange={updateRowState} />
            <Row row={row2State} id={2} onChange={updateRowState} />
            <Row row={row3State} id={3} onChange={updateRowState} />
            <Row row={row4State} id={4} onChange={updateRowState} />
            <Row row={row5State} id={5} onChange={updateRowState} />
            <Row row={row6State} id={6} onChange={updateRowState} />
            
        </div>
    )
}

export default Board
