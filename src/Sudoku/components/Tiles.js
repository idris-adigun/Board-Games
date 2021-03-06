import React from 'react'
import './Tiles.css'
const Tiles = ({tile, changeTile}) => {
    return (
        <>
           <input className={`tiles + col-${tile.col} + row-${tile.row} + ${tile.readonly ? 'readonly' : 'not-readonly'}-${tile.value ? 'filled' : 'empty'}-${tile.valid}`}
            disabled={tile.readonly}
            value={tile.value ? tile.value: ""} 
            readOnly={tile.readonly} 
            type="text"
            onChange={(e) => changeTile(tile.index, e.target.value)}
            maxLength="1"/>
        </>
    )
}

export default Tiles
