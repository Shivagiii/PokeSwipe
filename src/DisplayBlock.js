import { Box, styled, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./DisplayBlock.css";
import axios from "axios";
import HomePage from "./HomePage";
import CardsPage from "./CardsPage";
import LikedPage from "./LikedPage";

function DisplayBlock({display,setDisplay}) {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    abilities: [],
    types: [],
    weigth: "",
    img: "",
    id: "",
  });
  const [likedItems, setLikedItems] = useState([]);
 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const fetchApi = async (id) => {
    const url = "https://pokeapi.co/api/v2/pokemon";          //api call using axios , random id is fetched 
    try {                                                     //using Math.random() in useEffect where this function is called
      const { data } = await axios.get(`${url}/${id}`);
      setPokemonData({
        name: data.name,
        abilities: data.abilities,
        types: data.types,
        weight: data.weight,
        img: data.sprites.other.dream_world,
        id: data.id,
      });
    } catch (e) {
      console.error(e);
      alert("Failed to fetch pokemon data");
    }
  };
  useEffect(() => {                                         //everytime a new pokemon is "liked" or "dislike"
    const number = Math.trunc(Math.random() * 1031) + 1;    //this useEffect will re render generating a new id
    fetchApi(number);
    console.log(pokemonData);
  }, [likedItems]);
  return (
    <Box className="mainBody">
      {display === "home" ? (
        <HomePage Item={Item} setDisplay={setDisplay} setLikedItems={setLikedItems}/>
      ) : display === "liked" ? (
        <LikedPage Item={Item} likedItems={likedItems} setDisplay={setDisplay}/>
      ) : (
        <CardsPage
          Item={Item}
          pokemonData={pokemonData}
          likedItems={likedItems}
          setLikedItems={setLikedItems}
          setDisplay={setDisplay}
        />
      )}
    </Box>
  );
}

export default DisplayBlock;
