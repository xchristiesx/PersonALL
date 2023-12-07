import * as React from 'react';
import Typography from '@mui/material/Typography';

export const ResultTitle = ({title}) => {
    return (
            <Typography variant="h2" component="div" align='center' padding='1.5rem'>
                {title}
            </Typography>
    )
}