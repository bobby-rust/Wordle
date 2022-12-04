import Row from './Row.js'
import React from 'react'
import words from "../5_letter_words"

function Board() {
    // Set up state
    const [boardState, setBoardState] = React.useState({
        currentRow: 1,
        isGameOver: false,
        word: words[Math.floor(Math.random() * words.length)].word,
    })

    const [row1State, setRow1State] = React.useState([])
    const [row2State, setRow2State] = React.useState([])
    const [row3State, setRow3State] = React.useState([])
    const [row4State, setRow4State] = React.useState([])
    const [row5State, setRow5State] = React.useState([])
    const [row6State, setRow6State] = React.useState([])

    // Regular expression to make sure the user enters a letter
    const pattern = new RegExp('[a-zA-Z]')

    function handleEnter(array, row) {
        /** 
         * This will be called when enter is pressed and the current row's state has length 5.
         * Compares the letters in current row to boardState.word and updates boardState with the correct class for each letter 
         * @return: void
         * @param array: the array to check
         * @param row: which row should be modified 
         */

        var i;
        var string = "";
        for (i = 0; i < array.length; i++) {
            string = string + array[i].letter
            if (array[i].letter === boardState.word[i]) {
                console.log("letter is in correct spot")
                if (row === 1) {
                    const tmpState = [...row1State]
                    tmpState[i].class = "square-green"
                    setRow1State(tmpState)
                }
                else if (row === 2) {
                    const tmpState = [...row2State]
                    tmpState[i].class = "square-green"
                    setRow2State(tmpState)
                }
                else if (row === 3) {
                    const tmpState = [...row3State]
                    tmpState[i].class = "square-green"
                    setRow3State(tmpState)
                }
                else if (row === 4) {
                    const tmpState = [...row4State]
                    tmpState[i].class = "square-green"
                    setRow4State(tmpState)
                }
                else if (row === 5) {
                    const tmpState = [...row5State]
                    tmpState[i].class = "square-green"
                    setRow5State(tmpState)
                }
                else if (row === 6) {
                    const tmpState = [...row6State]
                    tmpState[i].class = "square-green"
                    setRow6State(tmpState)
                }
            }
            else if (boardState.word.includes(array[i].letter)) {
                console.log("word includes letter")
                if (row === 1) {
                    const tmpState = [...row1State]
                    tmpState[i].class = "square-yellow"
                    setRow1State(tmpState)
                }
                else if (row === 2) {
                    const tmpState = [...row2State]
                    tmpState[i].class = "square-yellow"
                    setRow2State(tmpState)
                }
                else if (row === 3) {
                    const tmpState = [...row3State]
                    tmpState[i].class = "square-yellow"
                    setRow3State(tmpState)
                }
                else if (row === 4) {
                    const tmpState = [...row4State]
                    tmpState[i].class = "square-yellow"
                    setRow4State(tmpState)
                }
                else if (row === 5) {
                    const tmpState = [...row5State]
                    tmpState[i].class = "square-yellow"
                    setRow5State(tmpState)
                }
                else if (row === 6) {
                    const tmpState = [...row6State]
                    tmpState[i].class = "square-yellow"
                    setRow6State(tmpState)
                }
            }
            else {
                if (row === 1) {
                    const tmpState = [...row1State]
                    tmpState[i].class = "square-grey"
                    setRow1State(tmpState)
                }
                else if (row === 2) {
                    const tmpState = [...row2State]
                    tmpState[i].class = "square-grey"
                    setRow2State(tmpState)
                }
                else if (row === 3) {
                    const tmpState = [...row3State]
                    tmpState[i].class = "square-grey"
                    setRow3State(tmpState)
                }
                else if (row === 4) {
                    const tmpState = [...row4State]
                    tmpState[i].class = "square-grey"
                    setRow4State(tmpState)
                }
                else if (row === 5) {
                    const tmpState = [...row5State]
                    tmpState[i].class = "square-grey"
                    setRow5State(tmpState)
                }
                else if (row === 6) {
                    const tmpState = [...row6State]
                    tmpState[i].class = "square-grey"
                    setRow6State(tmpState)
                }
            }
        }

        if (string == boardState.word) {
            console.log("You won!")
            setBoardState({...boardState, isGameOver: true})
        }
        else {
            console.log("Nice try.")
        }
    }
    
    function handleKeydown(event) {
        if (boardState.isGameOver) return
        if ((event.key.length > 1) && (event.key !== "Backspace" && event.key !== "Enter")) return

        if (boardState.currentRow === 1) {
            if (event.key === " " || event.key === "CapsLock" || event.key === "Tab" || event.key === "Alt" || event.key === "Shift" || event.key === "Control" || !pattern.test(event.key)) return
            else if (event.key === "Backspace") {
                const tmpState = [...row1State]
                tmpState.pop()
                setRow1State(tmpState)
            }
            else if (event.key === "Enter") {
                if (row1State.length !== 5) {
                    return
                }
                else {
                    setBoardState({...boardState, currentRow: boardState.currentRow + 1})
                    handleEnter(row1State, 1)
                }
            }
            else if (row1State.length < 5) {
                setRow1State([...row1State, {letter: event.key, class: "square-default"}])
            }
        }
        if (boardState.currentRow === 2) {
            if (event.key === " " || event.key === "CapsLock" || event.key === "Tab" || event.key === "Alt" || event.key === "Shift" || event.key === "Control" || !pattern.test(event.key)) return
            else if (event.key === "Backspace") {
                const tmpState = [...row2State]
                tmpState.pop()
                setRow2State(tmpState)
            }
            else if (event.key === "Enter") {
                if (row2State.length !== 5) {
                    return
                }
                else {
                    setBoardState({...boardState, currentRow: boardState.currentRow + 1})
                    handleEnter(row2State, 2)

                }
            }
            else if (row2State.length < 5) {
                setRow2State([...row2State, {letter: event.key, class: "square-default"}])
            }
        }
        if (boardState.currentRow === 3) {
            if (event.key === " " || event.key === "CapsLock" || event.key === "Tab" || event.key === "Alt" || event.key === "Shift" || event.key === "Control" || !pattern.test(event.key)) return
            else if (event.key === "Backspace") {
                const tmpState = [...row3State]
                tmpState.pop()
                setRow3State(tmpState)
            }
            else if (event.key === "Enter") {
                if (row3State.length !== 5) {
                    return
                }
                else {
                    setBoardState({...boardState, currentRow: boardState.currentRow + 1})
                    handleEnter(row3State, 3)
                }
            }
            else if (row3State.length < 5) {
                setRow3State([...row3State, {letter: event.key, class: "square-default"}])
            }
        }
        if (boardState.currentRow === 4) {
            if (event.key === " " || event.key === "CapsLock" || event.key === "Tab" || event.key === "Alt" || event.key === "Shift" || event.key === "Control" || !pattern.test(event.key)) return
            else if (event.key === "Backspace") {
                const tmpState = [...row4State]
                tmpState.pop()
                setRow4State(tmpState)
            }
            else if (event.key === "Enter") {
                if (row4State.length !== 5) {
                    return
                }
                else {
                    setBoardState({...boardState, currentRow: boardState.currentRow + 1})
                    handleEnter(row4State, 4)
                }
            }
            else if (row4State.length < 5) {
                setRow4State([...row4State, {letter: event.key, class: "square-default"}])
            }
        }
        if (boardState.currentRow === 5) {
            if (event.key === " " || event.key === "CapsLock" || event.key === "Tab" || event.key === "Alt" || event.key === "Shift" || event.key === "Control" || !pattern.test(event.key)) return
            else if (event.key === "Backspace") {
                const tmpState = [...row5State]
                tmpState.pop()
                setRow5State(tmpState)
            }
            else if (event.key === "Enter") {
                if (row5State.length !== 5) {
                    return
                }
                else {
                    setBoardState({...boardState, currentRow: boardState.currentRow + 1})
                    handleEnter(row5State, 5)
                }
            }
            else if (row5State.length < 5) {
                setRow5State([...row5State, {letter: event.key, class: "square-default"}])
            }
        }
        if (boardState.currentRow === 6) {
            if (event.key === " " || event.key === "CapsLock" || event.key === "Tab" || event.key === "Alt" || event.key === "Shift" || event.key === "Control" || !pattern.test(event.key)) return
            else if (event.key === "Backspace") {
                if (boardState.isGameOver) return 
                const tmpState = [...row6State]
                tmpState.pop()
                setRow6State(tmpState)
            }
            else if (event.key === "Enter") {
                if (row6State.length !== 5) {
                    return
                }
                else {
                    setBoardState({...boardState, currentRow: boardState.currentRow + 1})
                    handleEnter(row6State, 6)
                    setBoardState({...boardState, isGameOver: true})
                }
            }
            else if (row6State.length < 5) {
                setRow6State([...row6State, {letter: event.key, class: "square-default"}])
            }
        }
    }
    
    // Create and clean up event listener for keydown events
    React.useEffect(() => {
        if (boardState.isGameOver) {
            console.log("Game over. The word was:", boardState.word)
        }
        window.addEventListener('keydown', handleKeydown)
        console.log("Game over is: ", boardState.isGameOver)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    })

    return (
        <div className='board'>
            <Row row={row1State} id={1}/>
            <Row row={row2State} id={2}/>
            <Row row={row3State} id={3}/>
            <Row row={row4State} id={4}/>
            <Row row={row5State} id={5}/>
            <Row row={row6State} id={6}/>
            {boardState.isGameOver && <h2>Game over. The word was: {boardState.word}</h2>}
        </div>
    )
}

export default Board
