import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



function LikedCard({item}) {
  return (
    <Card  sx={{ display:"flex" , flexDirection:"column",alignItems: "center" }}>
   
      <CardMedia
        component="img"
        height="140"
        sx={{width:"fit-content"}}
        
        image={item.img}
        alt={item.name}
      />
      
        <Typography  variant="h6" component="p">
          {item.name}
        </Typography>
      

  </Card>
  )
}

export default LikedCard