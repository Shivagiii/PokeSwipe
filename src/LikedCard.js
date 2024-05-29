import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function LikedCard({ item }) {

  //just displaying the liked pokemon cards from here 
  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardMedia
        component="img"
        height="140"
        sx={{ width: "fit-content" }}
        image={item.img}
        alt={item.name}
      />
      <Typography variant="h6" component="p" textTransform={"capitalize"}>
        {item.name}
      </Typography>
    </Card>
  );
}

export default LikedCard;
