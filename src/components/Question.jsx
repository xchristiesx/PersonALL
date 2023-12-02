import * as React from 'react';
import Typography from '@mui/material/Typography';

export const Question = (props) => {
    return (
        <Typography variant="h2" component="div" align='center'>
            {props.question}
        </Typography>
    )
}