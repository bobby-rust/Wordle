import Square from './Square.js'
import React, { useState } from 'react'

function Row(props) {
    // console.log("props.row in row.js: ", props.row)
    return (
        <div>
            <Square data={props.row[0]} idx={0}/>
            <Square data={props.row[1]} idx={1}/>
            <Square data={props.row[2]} idx={2}/>
            <Square data={props.row[3]} idx={3}/>
            <Square data={props.row[4]} idx={4}/>
            
        </div>
    )
}

export default Row
