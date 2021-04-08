import React from 'react'
import Tiles from './Tiles'
import './Board.css'
const Board = ({board, changeTile, solved}) => {
    // console.log(board)
    return (
        <div className="board">
            {board.map((tile) => (<Tiles key={tile.index} tile={tile} changeTile={changeTile}/>))}
        </div>
    )
}

export default Board
