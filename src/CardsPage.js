import React, {  useEffect } from "react";
import { Card,CardMedia, Grid, Typography, Button } from "@mui/material";


function CardsPage({ Item, pokemonData, likedItems, setLikedItems }) {
  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const onLiked = () => {           //on every like , name and url of pokemon is being stored here 
    setLikedItems([                 //and can be seen by clicking on the like button
      ...likedItems,
      { name: pokemonData.name, img: pokemonData.img.front_default },
    ]);
    console.log(likedItems);
  };
  const onDisLiked = () => {        //on clicking dislike , just re-rendering likeItems so that new pokemon is fetched
    setLikedItems([...likedItems])
  }
  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "100%", justifyContent: "center" }}
    >
      <Grid item xs={12} md={4}>
        <Item sx={{ minHeight:"40vh" }}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              sx={{ maxWidth: 250, maxHeight: 250, objectFit: "scale-down" }}
              image={pokemonData.img.front_default}
              alt={pokemonData.name}
            />
          </Card>
        </Item>
      </Grid>
      <Grid item xs={12} md={8} >
        <Item >
          <Grid
            item
            xs={12}
            sx={{ height: "90px", display: "flex",paddingTop:"10px" }}
            justifyContent={"center"}
          >
            <Typography gutterBottom variant="h4" component="div" textTransform={"capitalize"}>
              {pokemonData.name}
            </Typography>{" "}
          </Grid>
          <Grid item xs={12} sx={{ height: "100px", display: "flex" }}>
            <Grid container direction={{ xs: "column", sm: "row" }} gap={1}>
              {pokemonData ? (
                pokemonData.abilities.map((a) => (
                  <Grid item xs>
                    <Item sx={{ bgcolor: "warning.light" }}>
                      <Typography gutterBottom textTransform={"capitalize"} variant="body2" component="div">
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
                  <Grid xs item >
                    <Item sx={{ bgcolor: "warning.dark" }}>
                      <Typography gutterBottom variant="body2" textTransform={"capitalize"} component="div">
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
          <Grid
            item
            sx={{ height: "60px", display: "flex" }}
            xs={12}
            gap={2}
            justifyContent={"center"}
            
          >
            <Grid item xs={3} margin={2}>
              <Button variant="contained" color="error" onClick={onDisLiked}>
                Dislike
              </Button>
            </Grid>
            <Grid item xs={3} margin={2}>
              <Button variant="contained" color="success" onClick={onLiked}>
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
