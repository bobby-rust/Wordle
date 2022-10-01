import Square from './Square.js'
import { useState } from 'react'

function Row() {

    
    return (
      <div>
        <div className="row"><Square/></div>
        <div className="row"><Square/></div>
        <div className="row"><Square/></div>
        <div className="row"><Square/></div>
        <div className="row"><Square/></div>
      </div>
    )
}

export default Row;

