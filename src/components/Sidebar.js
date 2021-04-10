import React from 'react'
import './sidebar.css';
import Button from '@material-ui/core/Button';
function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="nav">
                <li className="nav-list"><Button className="btn">Home</Button></li>
                <li className="nav-list"><Button className="btn">Sudoku</Button></li>
            </ul>
        </div>
    )
}

export default Sidebar
