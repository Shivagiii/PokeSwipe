import React from "react";
import { Grid, Typography } from "@mui/material";
import LikedCard from "./LikedCard";

function LikedPage({ Item, likedItems }) {

  //On clicking the heart shaped icon from Header , all the liked pokemon will be displayed from here
  
  return (
    <Grid
      container
      sx={{ height: "100%", width: "100%", justifyContent: "center" }}
    >
      <Item sx={{ width: "100%", boxShadow: "none" }}>
        <Typography gutterBottom variant="h4" component="div">
          Pokemon you have liked!
        </Typography>{" "}
        <Grid container spacing={2}>
          {likedItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {" "}
              <LikedCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Item>
    </Grid>
  );
}

export default LikedPage;
