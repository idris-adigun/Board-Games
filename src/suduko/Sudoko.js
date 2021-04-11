import React, { useState } from 'react';
import './sudoku.css'
import Board from './components/Board'
import Puzzle from './puzzle'
import Button from '@material-ui/core/Button';

function Sudoko() {

    const [board, setBoard] = useState(() => Puzzle.generatePuzzle());
    const [solved, setSolved] = useState(() => Puzzle.solvePuzzle(board));

    const changeTile = (index, value) =>{
        try{
            value = parseInt(value);
            setBoard(
                board.map((tile) => 
                    tile.index === index ? {...tile, value: value, valid: 'empty' }: tile
                )
    
            )
        }
        catch(e){
            console.log(e)
        }
    }

    const restart = () => {
        let newBoard = Puzzle.generatePuzzle();
        setBoard(
            board => board = newBoard
        )
        setSolved(
           solved => solved =[...Puzzle.solvePuzzle(newBoard)] 
        )
    }

    const clearBoard = () => 
    {
        setBoard(
            board => board.map(tile =>  !tile.readonly ? {...tile, value: 0, valid: 'empty'}: tile)
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
            <div className="sudoku">
                        <Board board={board} changeTile={changeTile}/>
                        <div className="controls">
                            <Button onClick={validate}  variant="contained" color="primary">Check Progress</Button>
                            <Button variant="contained" color="primary">Pause</Button>
                            <Button variant="contained" onClick={clearBoard} color="primary">Clear</Button>
                            <Button variant="contained" onClick={restart} color="primary">Restart</Button>
                        </div>
            </div>
    )
}

export default Sudoko
