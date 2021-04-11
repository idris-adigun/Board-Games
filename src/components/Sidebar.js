import React from 'react'
import './sidebar.css';
import Button from '@material-ui/core/Button';
function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="nav">
                <li className="nav-list"><Button className="btn">Home</Button></li>
                <li className="nav-list"><Button className="btn">Sudoku</Button></li>
                <li className="nav-list"><Button className="btn">Hangman</Button></li>
                <li className="nav-list"><Button className="btn">Tic-tac-toe</Button></li>
                <li className="nav-list"><Button className="btn">Connect Four</Button></li>
                <li className="nav-list"><Button className="btn">Bomberman</Button></li>
                <li className="nav-list"><Button className="btn">Scores</Button></li>
            </ul>
        </div>
    )
}

export default Sidebar
