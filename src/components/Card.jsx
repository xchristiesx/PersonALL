import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function Card({ title, image, children }) {
  return (
    <Grid md={4}>
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          textAlign={'center'}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography textAlign={"center"} variant="body2" color="text.secondary">
          {children}
        </Typography>
      </CardContent>
    </Grid>
  );
}
