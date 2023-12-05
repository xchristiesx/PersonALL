import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

export const ResultDescription = ({descriptions}) => {
    return (
        <>
            <ThemeProvider theme={{palette: {primary: {main: '#ffe8ca'},},}}>
                <Box sx={{width: '80%', margin: 'auto', borderRadius: 8, bgcolor: 'primary.main', justifyContent: 'center', alignItems: 'center', padding: '2rem'}} >
                    {descriptions.map((desc) =>
                        <Typography variant="body1" component="div" gutterBottom key={desc} sx={{ alignItems: 'center' }}>
                            {desc}
                        </Typography>
                    )}
                </Box>
            </ThemeProvider>
        </>
    )
}