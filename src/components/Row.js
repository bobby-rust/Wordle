import Square from './Square.js'
import React, { useState } from 'react'

function Row(props) {
    // console.log("props.row in row.js: ", props.row)
    return (
        <div>
            <Square data={props.row[0]} idx={0} onChange={props.onChange} />
            <Square data={props.row[1]} idx={1} onChange={props.onChange} />
            <Square data={props.row[2]} idx={2} onChange={props.onChange} />
            <Square data={props.row[3]} idx={3} onChange={props.onChange} />
            <Square data={props.row[4]} idx={4} onChange={props.onChange} />
            
        </div>
    )
}

export default Row
