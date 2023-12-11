import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {Container} from "@mui/material";
import {useTheme} from "@mui/system";
import {GenericPage} from "../components/GenericPage.jsx";

export const ErrorPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <GenericPage>
            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h3" component="div" align='center' padding='1.5rem'>
                    Jejda!
                </Typography>
                <Typography variant="h5" component="div" align='center' padding='1.5rem'>
                    Někdo se nám tu ztratil.
                </Typography>
                <Typography variant="h5" component="div" align='center' paddingTop='2rem'>
                    Pojdte zpátky na hlavní stránku.
                </Typography>
                <Button
                    onClick={() => navigate('/')}
                    sx={{
                        marginTop: '1rem',
                    }}
                    variant="contained"
                    color="secondary"
                    size="large"
                >
                    Domů
                </Button>
            </Container>
        </GenericPage>
    )
}
