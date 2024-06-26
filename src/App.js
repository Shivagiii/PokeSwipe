import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DisplayBlock from "./DisplayBlock";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [display, setDisplay] = useState("home");         //state to handle which block should be displayed

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light", // handling the dark mode state on toggle
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header                                   //lifting state up here so that dark mode can be viewed everywhere
          setDarkMode={setDarkMode}
          isDarkMode={isDarkMode}
          setDisplay={setDisplay}
          display={display}
        />
        <DisplayBlock setDisplay={setDisplay} display={display} />
      </div>
    </ThemeProvider>
  );
}

export default App;
