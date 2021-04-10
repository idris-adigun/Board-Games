import React, { useState } from 'react'
import Board from './components/Board'
import Puzzle from './puzzle'

function Sudoko() {

    const [board, setBoard] = useState(() => Puzzle.generatePuzzle());
    const [solved] = useState(() => Puzzle.solvePuzzle(board));
    
    // Change tile value
    const changeTile = (index, value) =>{
        try{
            value = parseInt(value);
        }
        catch(e){
            console.log(e)
        }
        setBoard(
            board.map((tile) => 
                tile.index === index ? {...tile, value: value, valid: 'empty' }: tile
            )

        )
    }

    // Validate if the submitted puzzle is correct
   const validate = () => {
       const newBoard = board;
        // Check if the value of the board correspond to solved puzzle then set valid value
        solved.forEach((value, i) => {
            newBoard[i].value === value ? 
                newBoard[i] = {...newBoard[i], valid: true} : 
                (newBoard[i].value ? 
                    newBoard[i] = {...newBoard[i], valid: false} : 
                    newBoard[i] = {...newBoard[i], valid: 'empty'}
                )
        })

        //Set the board to the new board 
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
