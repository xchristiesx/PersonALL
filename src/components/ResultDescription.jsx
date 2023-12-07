import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

export const ResultDescription = ({descriptions}) => {
    return (
        <>
                <Box sx={{
                    width: '80%',
                    margin: 'auto',
                    borderRadius: 8,
                    bgcolor: 'primary.main',
                    boxShadow: '0 0 5px #c9c4a9',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: "justify",
                    padding: '2rem',
                    backgroundColor: '#ffe8ca'
                }}>
                    {descriptions.map((desc) =>
                        <Typography variant="body1" component="div" gutterBottom key={desc}
                                    sx={{alignItems: 'center', userSelect: 'none'}}>
                            {desc}
                        </Typography>
                    )}
                </Box>
        </>
    )
}