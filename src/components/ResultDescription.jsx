import * as React from 'react';
import Typography from '@mui/material/Typography';

export const ResultDescription = ({descriptions}) => {
    return (
        <>
            {descriptions.map((desc) =>
                <Typography variant="body1" component="div" gutterBottom key={desc}>
                    {desc}
                </Typography>
            )}
        </>
    )
}