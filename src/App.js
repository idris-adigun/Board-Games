import './App.css';
import React, { useState, lazy, Suspense } from 'react';
// import Sudoku from './Sudoku/Sudoku';
// import Home from './Home/Home';
// import Hangman from './Hangman/Hangman'
import Sidebar from './components/Sidebar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const Home = lazy(() => import('./Home/Home'));
const Hangman = lazy(() => import('./Hangman/Hangman'));
const Sudoku = lazy(() => import('./Sudoku/Sudoku'));

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
  }
  return (
    <Router>
      <Suspense fallback="Loading...">
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
            <div className="game">
              <Route path="/" exact component={Home}></Route>
              <Route path="/Sudoku" component={Sudoku}></Route>
              <Route path="/Hangman" component={Hangman}></Route>
            </div>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
