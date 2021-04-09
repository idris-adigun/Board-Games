import React, { useState } from 'react'
import Board from './components/Board'
import Puzzle from './puzzle'

function Sudoko() {

    const [board, setBoard] = useState(() => Puzzle.generatePuzzle());
    const [solved] = useState(() => Puzzle.solvePuzzle(board));
// console.log(board)
    // Change tile value
    const changeTile = (index, value) =>{
        value = parseInt(value);
        
        setBoard(
            board.map((tile) => 
                tile.index === index ? {...tile, value: value }: tile
            )

        )
    }

    // Validate if the submitted puzzle is correct
   const validate = () => {
       
       const newBoard = board;
       const validState = true;
        for(let i = 0; i<solved.length; i++){
            if(newBoard[i].value === solved[i])
            {
                newBoard[i] = {...newBoard[i], valid: validState}
            }
            else{
                // Check if the tile has value before changing the valid state
                if(newBoard[i].value){
                    newBoard[i] = {...newBoard[i], valid: !validState}
                }
            }
        }
        setBoard(board => board = [...newBoard])
    }


    return (
        <div>
            <h2>Sudoku</h2>
            <Board board={board} changeTile={changeTile}/>
            <div style={{textAlign: "center"}}>
                <button onClick={validate}>Validate Puzzle</button><br></br>
            </div>
        </div>
    )
}

export default Sudoko
