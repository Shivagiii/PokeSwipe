import React, { useState } from 'react';
import {Button, FormControlLabel,Switch} from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import './Header.css';

function Header({setDarkMode,isDarkMode,setDisplay}) {
 
    const handleChange = () => {
        setDarkMode(!isDarkMode);
      };
   
     
      
  return (
    <header className="App-header">
      
      <FavoriteTwoToneIcon onClick={() => setDisplay("liked")} />
      <p onClick={() => setDisplay("home")}>PokeSwipe</p>
    
    <div>
    <FormControlLabel onChange={handleChange} control={<Switch />} label="Dark Mode" />
    </div>
    </header>
  )
}

export default Header