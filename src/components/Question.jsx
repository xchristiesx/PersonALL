import * as React from 'react';
import Typography from '@mui/material/Typography';
import {useMediaQuery} from "@mui/material";

export const Question = (props) => {
    const variant = useMediaQuery('(min-width:600px)') ? 'h2' : 'h4';
    return (
        <Typography variant={variant} component="div" align='center'>
            {props.question}
        </Typography>
    )
}