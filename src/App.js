import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import DisplayBlock from './DisplayBlock';
function App() {

  const [isDarkMode,setDarkMode]= useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
       <CssBaseline />
    <div className="App"  >
     <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
     <DisplayBlock/>
    </div>
    </ThemeProvider>
  );
}

export default App;
