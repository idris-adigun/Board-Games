import React from 'react'
import './sidebar.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="nav">
                
                <li className="nav-list">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button className="btn">Home</Button>
                    </Link>
                </li>
                <li className="nav-list">
                    <Link to="/Sudoku" style={{ textDecoration: 'none' }}>
                        <Button className="btn">Sudoku</Button>
                    </Link>
                </li>
                <li className="nav-list">
                    <Link to="/Hangman" style={{ textDecoration: 'none' }}>
                        <Button className="btn">Hangman</Button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
