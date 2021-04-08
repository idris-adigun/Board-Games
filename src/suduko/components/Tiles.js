import React from 'react'
import './Tiles.css'
const Tiles = ({tile, changeTile}) => {
    return (
        <>
           <input className={`tiles + col-${tile.col} + row-${tile.row}`}
            value={tile.value ? tile.value: ""} 
            readOnly={tile.readonly} 
            type="text"
            onChange={(e) => changeTile(tile.index, e.target.value)}
            maxLength="1"/>
        </>
    )
}

export default Tiles
