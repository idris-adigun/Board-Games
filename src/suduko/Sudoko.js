import React, { useState, useEffect } from 'react';
import './sudoku.css';
import Timer from './components/Timer';
import Board from './components/Board';
import Puzzle from './puzzle';
import Button from '@material-ui/core/Button';

function Sudoko() {
    const [board, setBoard] = useState(() => Puzzle.generatePuzzle());
    const [correctTileCount, setCorrectTileCount] = useState(0);
    const [solved, setSolved] = useState(() => Puzzle.solvePuzzle(board));
    const [time, setTime] = useState(0)

    useEffect(() => {
            setCorrectTileCount(correctTileCount => correctTileCount = correctTileCount)
    }, [correctTileCount]);
    
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
        countValidTile(newBoard);
        //Set the board to the new board 
        setBoard(board => board = [...newBoard])
    }

    const countValidTile = (newBoard) =>{
        let count = 0;
        newBoard.forEach(element => {
            if(element.valid === true){
                count++
            }
        });
        setCorrectTileCount(prevCount => prevCount = count)
    }
    const getTimer = (seonds) =>{
        setTime(time => time = seonds)
        console.log(time)
    }
    return (
            <div className="sudoku">
                <Timer getTimer={getTimer}/>
                <Board board={board} changeTile={changeTile}/>
                <div>{correctTileCount} valid tiles</div>
                <div>{correctTileCount === 81 ? "Game Won" : ''}</div>
                <div className="controls">
                    <Button onClick={validate}  variant="contained" color="primary">Verify</Button>
                    <Button variant="contained" onClick={clearBoard} color="primary">Clear</Button>
                    <Button variant="contained" onClick={restart} color="primary">Restart</Button>
                </div>
            </div>
    )
}

export default Sudoko
