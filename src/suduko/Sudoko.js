import React, { useState } from 'react'
import Board from './components/Board'
import Puzzle from './puzzle'

function Sudoko() {

    const [board, setBoard] = useState(() => Puzzle.generatePuzzle());
    const [solved] = useState(() => Puzzle.solvePuzzle(board));
    // Change tile value
    const changeTile = (index, value) =>
    {
        try{
            value = parseInt(value);
        }
        catch(e){
            console.log(e)
        }
        setBoard(
            board.map((tile) => 
                tile.index === index ? {...tile, value: value }: tile
            )

        )
    }


    return (
        <div>
            <h2>Sudoku</h2>
            {/* <div>{solvedPuzzle}</div> */}
            <Board board={board} changeTile={changeTile}/>
            <button>Validate Puzzle</button><br></br>
            {solved}

        </div>
    )
}

export default Sudoko
