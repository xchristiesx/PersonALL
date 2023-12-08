import React from 'react';
import {GenericPage} from '../components/GenericPage.jsx';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/system';
import Lottie from "lottie-react";
import animationData from '../resources/Animation-homepage.json';



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
                <Typography gutterBottom align='center' margin={"7rem"}
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
                    {`"It's not personall it's PersonALL.`}
                </Typography>
                <div>
      <Lottie
        animationData={animationData}
        loop={false}
        autoRemove={false}
        delay={900000}
        style={{
          width: 750,
          height: 750,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

        }}
      />
    </div>
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
                <Typography variant="subtitle1" 
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
