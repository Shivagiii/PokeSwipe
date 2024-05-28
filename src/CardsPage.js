import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

function CardsPage({ Item, pokemonData }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "100%", justifyContent: "center" }}
    >
      <Grid item xs={12} md={6} lg={4}>
        <Item sx={{ height: "80%" }}>
          <img
            height="80%"
            width="50%"
            src={pokemonData.img.front_default}
            alt={pokemonData.name}
          />
        </Item>
      </Grid>
      <Grid item xs={12} md={6} lg={8} spacing={2}>
        <Item >
          <Grid item xs={12} sx={{ height: "60px", display: "flex" }}>
            <Typography gutterBottom variant="h4" component="div">
              {pokemonData.name}
            </Typography>{" "}
          </Grid>

          <Grid item xs={12}  sx={{ height: "100px",display: "flex" }}   >
            <Grid container direction={{ xs: 'column', sm: 'row' }} gap={1}>
            {pokemonData ? (
              pokemonData.abilities.map((a) => (
                <Grid item xs>
                  <Item sx={{ bgcolor: "yellow" }}>
                    <Typography gutterBottom variant="body2" component="div">
                      {a.ability.name}
                    </Typography>
                  </Item>
                </Grid>
              ))
            ) : (
              <></>
            )}
            {pokemonData ? (
              pokemonData.types.map((t) => (
                <Grid xs item>
                  <Item sx={{ bgcolor: "orange" }}>
                    <Typography gutterBottom variant="body2" component="div">
                      {t.type.name}
                    </Typography>
                  </Item>
                </Grid>
              ))
            ) : (
              <></>
            )}
            </Grid>
          </Grid>
          <Grid item sx={{ height: "50px",display: "flex" }} xs={12}>
            <Grid item xs={3}>
              <Button variant="contained" color="error">Dislike</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="success">
                Like
              </Button>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
}

export default CardsPage;
