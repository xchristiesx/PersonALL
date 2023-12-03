import * as React from 'react';
import Typography from '@mui/material/Typography';

export const ResultSteps = ({steps}) => {
    return (
        <>
            {steps.map(({title, desc}) =>
                <Typography variant="body1" component="div" gutterBottom key={title}>
                    <b>{title}</b>: {desc}
                </Typography>
            )}
        </>
    )
}
