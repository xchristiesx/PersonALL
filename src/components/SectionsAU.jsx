import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Card from '../components/Card.jsx';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/material';

export default function SectionsAU({ title, cards, children }) {
  return (
    <Grid
      height={'calc(100vh - 64px)'}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography textAlign={'center'} variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid
        sx={{ margin: '0 2rem ' }}
        alignItems={'center'}
        justifyContent={'space-around'}
        container
        spacing={8}
      >
        {cards.map(({ title, img, content }) => (
          <Card key={title} image={img} title={title}>
            {content}
          </Card>
        ))}
      </Grid>
      <Container sx={{ margin: '0 auto ' }}>{children}</Container>
    </Grid>
  );
}
