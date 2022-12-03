import React from 'react'

class RowClass extends React.Component {
    squareContent = ''
    row = []
    render() {
        for (i = 0; i < 5; i++) {
            square = <div>{squareContent}</div>
            row.push(square)
        }
        return row
    }
}
