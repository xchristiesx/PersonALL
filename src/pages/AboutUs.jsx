import React from 'react';
import {GenericPage} from '../components/GenericPage.jsx';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SectionsAU from '../components/SectionsAU.jsx';
import {Container} from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {Box} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import {useTheme} from '@mui/system';

export const AboutUs = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (<GenericPage>
            <ThemeProvider theme={{palette: {primary: {main: '#ffe8ca'}}}}>
                <Box
                    sx={{
                        width: '80%',
                        margin: 'auto',
                        borderRadius: 8,
                        bgcolor: 'primary.main',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: '0 0 5px #c9c4a9',
                        marginBottom: '5rem',
                        [theme.breakpoints.up('sm')]: {
                            padding: '2rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                            padding: '0.5rem',
                        },
                        [theme.breakpoints.down('xs')]: {
                            padding: '0.5rem',
                        },
                        [theme.breakpoints.up('md')]: {
                            padding: '2rem',
                        },
                        [theme.breakpoints.up('lg')]: {
                            padding: '5rem',
                        },
                    }}
                >
                    <Typography variant="h2" gutterBottom>
                        O nás
                    </Typography>

                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{textAlign: 'justify', userSelect: 'none'}}
                    >
                        Všichni si zasloužíme být součástí společnosti a cítit se v ní
                        vítáni a respektováni. Bohužel to tak vždy není. Existuje mnoho
                        lidí, kteří se mohou cítit vyčleněni ze společnosti z důvodu svého
                        původu, rasy, náboženství, sexuální orientace nebo jiného faktoru.
                        Našim cílem je toto změnit a každému jedinci, který se občas cítí,
                        že nezapadá do společnosti, ve které se často nachází, ať už se
                        jedná o školu, práci či volný čas, podali pomocnou ruku a prvních
                        pár rad, jak se s tím lépe vypořádat. Jak začít svou vlastní cestu k
                        lepšímu pocitu začlenění. Snažíme se vytvářet komunitu, kde je každý
                        hlas důležitý, a kde se setkávají různorodé příběhy, názory a
                        zkušenosti. Věříme, že můžeme pomoci vytvořit společnost, ve které
                        se každý cítí vítán a respektován. Jsme odhodláni pracovat na
                        dosažení těchto cílů a vytvářet svět, ve kterém je inkluze normou.
                    </Typography>

                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            padding: '2rem'
                        }}
                    >
                        PersonALL je váš společník na cestě k inkluzivitě a pochopení.
                    </Typography>
                </Box>
            </ThemeProvider>

            <SectionsAU
                title={'Naše cíle:'}
                cards={[{
                    title: 'Inclusivita',
                    img: 'img/inclusivita.jpg',
                    content: 'Budujeme prostředí bez předsudků, kde každý má možnost být slyšen a oceněn. Chceme podporovat dialog o rozmanitosti a vzájemném respektu.',
                }, {
                    title: 'Podpora',
                    img: 'img/podpora.jpg',
                    content: 'Poskytujeme zdroje a prostor pro ty, kteří hledají podporu v situacích spojených s vyčleněním. Máme tu pro vás.',
                },

                    {
                        title: 'Vzdělávání',
                        img: 'img/vzdelavani.png',
                        content: 'Rozšiřujeme povědomí o inkluzivitě a bojujeme proti stereotypům prostřednictvím osvětových iniciativ a sdílení příběhů.',
                    },]}
            ></SectionsAU>
            <SectionsAU
                title={'Jak se můžete připojit:'}
                cards={[{
                    title: 'Komunita',
                    img: 'img/komunita.jpg',
                    content: 'Přidejte se k nám a najděte spojení s lidmi, kteří sdílejí vaše hodnoty a zkušenosti.',
                }, {
                    title: 'Zdroje',
                    img: 'img/zdroje.jpg',
                    content: 'Pokud byste chtěli přispět svým časem, financemi nebo vědomostmi, ozvěte se nám. Budeme rádi!',
                },

                    {
                        title: 'Příběhy',
                        img: 'img/vzdelavani.png',
                        content: 'Sdílejte své příběhy nebo najděte podporu ve sdílení příběhů ostatních. Každý příběh má sílu změnit perspektivu.',
                    },]}
            >
                <Typography textAlign={'center'} variant="body1">
                    Připojte se k nám na cestě ke sdílení lásky, porozumění a vytváření
                    inkluzivního prostředí pro všechny. Společně můžeme tvořit změnu!
                </Typography>
            </SectionsAU>
            <Container
                sx={{
                    margin: '0 auto', display: 'flex', justifyContent: 'center', textAlign: 'justify',
                }}
            >
                <Button
                    onClick={() => navigate('/conditions')}
                    sx={{
                        [theme.breakpoints.up('sm')]: {
                            margin: '2rem',
                        }, [theme.breakpoints.down('sm')]: {
                            margin: '1rem',
                        }, [theme.breakpoints.down('xs')]: {
                            margin: '1rem',
                        }, [theme.breakpoints.up('md')]: {
                            margin: '2rem',
                        },
                    }}
                    variant="contained"
                    color="secondary"
                    size="large"
                >
                    Potřebuji pomoc
                </Button>
            </Container>
        </GenericPage>);
};
