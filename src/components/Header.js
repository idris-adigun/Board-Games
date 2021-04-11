import React, {useState } from 'react'
import './Header.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import {useTheme} from '../theme/useTheme';
import { setToLS, getFromLS } from '../utils/storage';

function Header({sidebar, changeTheme}) {
    
    const themesFromStore = getFromLS('all-themes');
    console.log(themesFromStore)
    const [theme, setTheme] = useState([]);
    const {setMode} = useTheme();
    const handleChange = (event) => {
        setTheme({ ...theme, [event.target.name]: event.target.checked });
      theme.light ? themeSwitcher(themesFromStore.data.light) : 
      themeSwitcher(themesFromStore.data.dark) 
    };
    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        changeTheme(selectedTheme)
    };
   const toggleSidebar = () =>{
        sidebar()
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar className="header"> 
                  <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
                      <MenuIcon/>
                    </IconButton>
                    <Switch
                        onChange={handleChange}
                        name="light"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </Toolbar>
              </AppBar>
        </div>
    )
}

export default Header
