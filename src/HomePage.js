import React from 'react';
import { Box, Grid, Typography,Button } from "@mui/material";

function HomePage({Item}) {
  return (
    <Grid container spacing={2} sx={{ height: "100%" ,justifyContent:"center" }}>
    <Grid item xs={12} >
      <Item>
        <Typography gutterBottom variant="h4" component="div">
          How to Play
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
    <Grid item xs={2} >
      <Item sx={{ height: "100%"}}><Typography gutterBottom variant="body2" component="div">
      <Button variant="contained">Let's Go!</Button> 
        </Typography>{" "}</Item>
    </Grid>
    </Grid>
  )
}

export default HomePage