import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards(props:any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          width="120"
          image={props.image}
          alt="Hairstyle"
          
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
           גלי 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          מוברש גלי 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
