import React, { useState } from 'react';
import {FormControlLabel,Switch} from '@mui/material';
import './Header.css';

function Header({setDarkMode,isDarkMode}) {
 
    const handleChange = () => {
        setDarkMode(!isDarkMode);
      };
    

  return (
    <header className="App-header">
        
    PokeSwipe
    <div>
    <FormControlLabel onChange={handleChange} control={<Switch />} label="Dark Mode" />
    </div>
    </header>
  )
}

export default Header