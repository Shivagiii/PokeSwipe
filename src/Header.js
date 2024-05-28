import React from "react";
import { FormControlLabel, Switch } from "@mui/material";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./Header.css";

function Header({ setDarkMode, isDarkMode, setDisplay, display }) {
  const handleChange = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <header className="App-header">
      {display === "liked" ? (
        <ArrowBackRoundedIcon onClick={() => setDisplay("swipe")} />
      ) : display === "swipe" ? (
        <FavoriteTwoToneIcon onClick={() => setDisplay("liked")} />
      ) : (
        <></>
      )}
      <p onClick={() => setDisplay("home")}>PokeSwipe</p>
      <div>
        <FormControlLabel
          onChange={handleChange}
          control={<Switch />}
          label="Dark Mode"
          color="default"
        />
      </div>
    </header>
  );
}

export default Header;
