import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

export const ResultEndDescription = ({end_desc}) => {
    return (
        <>
            <ThemeProvider theme={{palette: {primary: {main: '#ffe8ca'},},}}>
                <Box sx={{width: '70%', margin: 'auto', borderRadius: 8, bgcolor: 'primary.main',textAlign: "justify", justifyContent: 'center', alignItems: 'center', padding: '2rem'}} >
                        <Typography variant="body1" component="div" gutterBottom key={end_desc} sx={{ alignItems: 'center', userSelect: 'none' }}>
                            {end_desc}
                        </Typography>
                </Box>
            </ThemeProvider>
        </>
    )
}