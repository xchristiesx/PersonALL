import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {Container} from "@mui/material";

export const TestNotTaken = () => {
    const navigate = useNavigate();
    return (
        <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h3" component="div" align='center' padding='1.5rem'>
                Jejda!
            </Typography>
            <Typography variant="h5" component="div" align='center' padding='1.5rem'>
                Bez splněného testu bohužel nemůžeme poskytnout relevantní výsledky.
            </Typography>
            <Typography variant="h5" component="div" align='center' paddingTop='2rem'>
                Vyplnit si jej můžete zde
            </Typography>
            <Button
                onClick={() => navigate('/conditions')}
                sx={{
                    marginTop: '1rem',
                }}
                variant="contained"
                color="secondary"
                size="large"
            >
                Potřebuji pomoc
            </Button>
        </Container>
    )
}
