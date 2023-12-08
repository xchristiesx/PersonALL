import React from 'react';
import {GenericPage} from '../components/GenericPage.jsx';
import {useNavigate} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/system';

export const HomePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <GenericPage>
            <Grid
                height={'calc(100vh-64px)'}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{height: 'calc(100vh - 64px)'}}

            >
                <Typography gutterBottom align='center'
                            sx={{
                                [theme.breakpoints.up('sm')]: {
                                    fontSize: '4rem',
                                },
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '2.5rem',
                                },
                                [theme.breakpoints.down('xs')]: {
                                    fontSize: '2rem',
                                },
                                userSelect: "none"
                            }}
                >
                    {`“It's not personal,`}
                </Typography>
                <Typography gutterBottom align='center'
                            sx={{
                                [theme.breakpoints.up('sm')]: {
                                    fontSize: '4rem',
                                },
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '2.5rem',
                                },
                                [theme.breakpoints.down('xs')]: {
                                    fontSize: '2rem',
                                },
                                userSelect: "none"
                            }}
                >
                    it's PersonALL.”
                </Typography>
                <Typography variant="subtitle1" gutterBottom
                        sx={{
                            fontStyle: 'italic',
                            padding: '0, 2em',
                            [theme.breakpoints.up('sm')]: {
                                margin: '2rem',
                            },
                            [theme.breakpoints.down('sm')]: {
                                margin: '1rem',
                            },
                            [theme.breakpoints.down('xs')]: {
                                margin: '1rem',
                            },
                            [theme.breakpoints.up('md')]: {
                                margin: '2rem',
                            },
                        }}
                >
                    Společně se snažíme budovat prostředí, kde se každý může cítit
                    akceptován a oceněn a doufáme, že i skutečně inkluzivní společnost.
                </Typography>
                <Button
                    onClick={() => navigate('/conditions')}
                    sx={{
                        [theme.breakpoints.up('sm')]: {
                            margin: '2rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                            margin: '1rem',
                        },
                        [theme.breakpoints.down('xs')]: {
                            margin: '1rem',
                        },
                        [theme.breakpoints.up('md')]: {
                            margin: '2rem',
                        },
                    }}
                    variant="contained"
                    color="secondary"
                    size="large"
                >
                    Potřebuji pomoc
                </Button>
            </Grid>
        </GenericPage>
    );
};
