import React from 'react';
import { Box, Grid, Typography,Button } from "@mui/material";

function HomePage({Item,setDisplay}) {
  return (
    <Grid container spacing={2} sx={{ height: "100%" ,justifyContent:"center" }}>
    <Grid item xs={12} >
      <Item>
        <Typography gutterBottom variant="h4" component="div">
          How to Play PokeSwipe
        </Typography>{" "}
      </Item>
    </Grid>
    <Grid item xs={12} sx={{ height: "60%" }}>
      <Item sx={{ height: "100%", fontSize:"calc(1rem+1vw)" }}>
        <Typography gutterBottom variant="h5" component="div">
          Pokemon appear one at a time.Choose "Like" or "Dislike" button to
          build your favorite team
        </Typography>
      </Item>
    </Grid>
    <Grid item xs={10} sm={3} >
      <Item sx={{   width:"100%",boxShadow: "none",}}>
      <Button variant="contained" fullWidth color="success" onClick={() => setDisplay("swipe")}>Let's Go!</Button> 
       </Item>
    </Grid>
    </Grid>
  )
}

export default HomePage