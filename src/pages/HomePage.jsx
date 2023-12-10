import React, { useState, useEffect } from 'react';
import { GenericPage } from '../components/GenericPage.jsx';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/system';
import Lottie from 'lottie-react';
import animationData from '../resources/Animation-homepage.json';



export const HomePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

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
            <Grid
                height={'calc(100vh-64px)'}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: 'calc(100vh - 64px)' }}
            >
                <Typography
                    gutterBottom
                    align="center"
                    margin={'7rem'}
                    style={{
                        opacity: showText ? 1 : 0, // Set opacity to 0 when showText is false
                        transition: 'opacity 1s ease-in-out', // Add a transition for opacity change
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

                {showAnimation && (
                    <div>
                        <Lottie
                            animationData={animationData}
                            loop={false}
                            style={{
                                width: 750,
                                height: 750,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: -2,
                            }}
                        />
                    </div>
                )}

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
                    style={{ zIndex: -2 }}
                >
                    Potřebuji pomoc
                </Button>
                <Typography
                    variant="subtitle1"
                    gutterBottom
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
            </Grid>
        </GenericPage>
    );
};
