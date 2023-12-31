import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Card({title, image, alt, children}) {
    return (
        <div
            className={'cardContainer'}
            style={{
                backgroundColor: 'white',
                borderRadius: 8,
                boxShadow: '0 0 5px #c9c4a9',
                userSelect: 'none',
            }}
        >
            <CardMedia
                sx={{objectFit: 'contain'}}
                component="img"
                height="140"
                image={image}
                alt={alt}
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
                <Typography
                    sx={{display: 'block'}}
                    textAlign={'center'}
                    variant="body2"
                    color="text.secondary"
                >
                    {children}
                </Typography>
            </CardContent>
        </div>
    );
}
