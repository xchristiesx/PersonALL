import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Card from '../components/Card.jsx';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {Container} from '@mui/material';

export default function SectionsAU({ title, cards, children }) {
  return (
    <Grid
      sx={{
        height: '100vh',
        position: 'sticky',
        top: '64px',
        backgroundColor: '#fefae0',
      }}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography textAlign={'center'} variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid
        sx={{ margin: 'O 20rem', gap: '1rem' }}
        alignItems={'center'}
        justifyContent={'space-around'}
        container
        textAlign={'justify'}
      >
        {cards.map(({ title, img, content }) => (
          <Card key={title} image={img} title={title}>
            {content}
          </Card>
        ))}
      </Grid>
      <Container sx={{ margin: '2rem  auto' }}>{children}</Container>
    </Grid>
  );
}
