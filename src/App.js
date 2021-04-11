import './App.css';
import React, { useState } from 'react';
import Sudoko from './suduko/Sudoko';
import Sidebar from './components/Sidebar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const [sidebar, setSidebar] = useState(true);

  //Automatically toggle siebar base on screen size
  const screenSize = window.matchMedia('(max-width: 800px)');
  screenSize.addEventListener('change', (screen) => {
    const isMobile = screen.matches;
    isMobile ? setSidebar(previousState => {previousState = false}) : setSidebar(previousState => {previousState = true})
  });

  const toggleSidebar = () => {
        setSidebar(previousState => previousState = !previousState)
        console.log(sidebar)
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar> 
          <IconButton edge="start" color="inherit" aria-label="menu"  onClick={toggleSidebar}>
              <MenuIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>
      <div className="container">
        <div className={sidebar ? "show-sidebar" : "hide-sidebar"}>
          <Sidebar/>
        </div>
        <div className="sudoku">
          <Sudoko/>
        </div>
      </div>
    </div>
  );
}

export default App;
