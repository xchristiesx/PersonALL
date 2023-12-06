import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Card from '../components/Card.jsx';
import {Container} from '@mui/material';

export default function SectionsAU({title, cards, children}) {

    return (
        <>
            <Typography textAlign={'center'} variant="h6" gutterBottom>
                {title}
            </Typography>
            <Grid spacing={3} container sx={{margin: '0 20px'}}>
                {cards.map(({title, img, content}) => (
                    <Grid key={title} xs={12} sm={4}>
                        <Card image={img} title={title}>
                            {content}
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Container sx={{margin: '2rem  auto'}}>{children}</Container>
        </>
    );
}
