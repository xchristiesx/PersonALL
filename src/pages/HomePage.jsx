import React, { useState, useEffect } from 'react';
import { GenericPage } from '../components/GenericPage.jsx';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/system';
import {useMediaQuery} from "@mui/material";
import Lottie from 'lottie-react';
import animationData from '../resources/Animation-homepage.json';

export const HomePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isDesktop = useMediaQuery('(min-width:600px)');

    // State to manage text and animation visibility
    const [showText, setShowText] = useState(true);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        // Hide text after 4 seconds
        const textTimeout = setTimeout(() => {
            setShowText(false);
        }, 1500);

        // Show animation after text disappears
        const animationTimeout = setTimeout(() => {
            setShowAnimation(true);
        }, 1800); // Adjust the timing based on your preference

        // Clean up timeouts to avoid memory leaks
        return () => {
            clearTimeout(textTimeout);
            clearTimeout(animationTimeout);
        };
    }, []);

    return (
        <GenericPage>
            {!isDesktop ? (
                // Desktop view
                <Grid
                    height={'calc(100vh-80px)'}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
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
            ) : (
                // Mobile view
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div style={{ position: 'relative' }}>
                        <Typography
                            gutterBottom
                            align="center"
                            margin={'7rem'}
                            style={{
                                opacity: showText ? 1 : 0,
                                transition: 'opacity 1s ease-in-out',
                                zIndex: -2,
                            }}
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
                                userSelect: 'none',
                            }}
                        >
                            {"It's not personal, it's PersonALL."}
                        </Typography>

                        <Button
                            onClick={() => navigate('/conditions')}
                            sx={{
                                position: 'absolute',
                                left: '45%',
                                transform: 'translateX(-45%)',
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

                        {showAnimation && (
                            <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }}>
                                <Lottie
                                    animationData={animationData}
                                    loop={false}
                                    style={{
                                        width: 750,
                                        height: 750,
                                    }}
                                />
                            </div>
                        )}

                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            style={{
                                position: 'absolute',
                                top: '140%', // Adjust the top position as needed, e.g., '80%'
                                left: '45%',
                                transform: 'translateX(-45%)',
                                width: '90%'
                            }}
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
                    </div>
                </Grid>
            )}
        </GenericPage>
    );
};
