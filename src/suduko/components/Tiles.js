import React from 'react'
import './Tiles.css'
const Tiles = ({tile, changeTile}) => {
    return (
        <div>
           <input className="tiles"
            value={tile.value ? tile.value: ""} 
            readOnly={tile.readonly} 
            type="text"
            onChange={(e) => changeTile(tile.index, e.target.value)}
            maxLength="1"/>
        </div>
    )
}

export default Tiles
