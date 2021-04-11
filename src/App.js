import './App.css';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header'
import { BrowserRouter as Router, Route} from 'react-router-dom';
// Themes
import { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';

// LAZY load component
const Home = lazy(() => import('./Home/Home'));
const Hangman = lazy(() => import('./Hangman/Hangman'));
const Sudoku = lazy(() => import('./Sudoku/Sudoku'));


function App() {
  
  const [sidebar, setSidebar] = useState(true);
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  
  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

   useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  //Automatically toggle siebar base on screen size
  const screenSize = window.matchMedia('(max-width: 800px)');
  screenSize.addEventListener('change', (screen) => {
    const isMobile = screen.matches;
    isMobile ? setSidebar(previousState => {previousState = false}) : setSidebar(previousState => {previousState = true})
  });

  const toggleSidebar = () => {
        setSidebar(previousState => previousState = !previousState)
  }
  const changeTheme = (newtheme) =>
  {
    setSelectedTheme(theme => theme = newtheme)
  }
  return (
    <Router>
      <Suspense fallback="Loading...">
        
     <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
          <div  style={{fontFamily: selectedTheme.font}}>
              <Header sidebar={toggleSidebar} changeTheme={changeTheme}/>
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
      </ThemeProvider>
      </Suspense>
    </Router>
  );
}

export default App;
