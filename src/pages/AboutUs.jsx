import React from 'react';
import { GenericPage } from '../components/GenericPage.jsx';
import Typography from '@mui/material/Typography';
import SectionsAU from '../components/SectionsAU.jsx';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';

export const AboutUs = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <GenericPage>
      <Box
        sx={{
          width: '80%',
          margin: '8rem',
          borderRadius: 8,
          bgcolor: 'primary.main',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 0 5px #c9c4a9',
          marginBottom: '5rem',
          backgroundColor: '#ffe8ca',
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
          sx={{ textAlign: 'center', userSelect: 'none' }}
        >
          <i>
            Všichni si zasloužíme být součástí společnosti a cítit se v ní
            vítáni a respektováni.
          </i>
          <br></br>
          <i>Bohužel to tak vždy není.</i>
          <i>
            Existuje mnoho lidí, kteří se mohou cítit vyčleněni ze společnosti z
            důvodu svého původu, rasy, náboženství, sexuální orientace nebo
            jiného faktoru.{' '}
          </i>{' '}
          <br></br>
          <i>
            Našim cílem je toto změnit a každému jedinci, který se občas cítí,
            že nezapadá do společnosti, ve které se často nachází, ať už se
            jedná o školu, práci či volný čas, podali pomocnou ruku a prvních
            pár rad, jak se s tím lépe vypořádat. Jak začít svou vlastní cestu k
            lepšímu pocitu začlenění. Snažíme se vytvářet komunitu, kde je každý
            hlas důležitý, a kde se setkávají různorodé příběhy, názory a
            zkušenosti. Věříme, že můžeme pomoci vytvořit společnost, ve které
            se každý cítí vítán a respektován. Jsme odhodláni pracovat na
            dosažení těchto cílů a vytvářet svět, ve kterém je inkluze normou.
          </i>
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            padding: '2rem',
          }}
        >
          <i>PersonALL je váš společník na cestě k inkluzivitě a pochopení.</i>
        </Typography>
      </Box>

      <Box
        style={{
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <SectionsAU
          title={'Naše cíle:'}
          cards={[
            {
              title: 'Podpora',
              img: 'img/podpora.png',
              alt: 'ikona podpory',
              content:
                'Poskytujeme zdroje a prostor pro ty, kteří hledají podporu v situacích spojených s vyčleněním. Máme tu pro vás.',
            },
            {
              title: 'Inclusivita',
              img: 'img/inclusivita.png',
              alt: 'ikona inklusivity',
              content:
                'Budujeme prostředí bez předsudků, kde každý má možnost být slyšen a oceněn. Chceme podporovat dialog o rozmanitosti a vzájemném respektu.',
            },
            {
              title: 'Vzdělávání',
              img: 'img/vzdelavani.png',
              alt: '',
              content:
                'Rozšiřujeme povědomí o inkluzivitě a bojujeme proti stereotypům prostřednictvím osvětových iniciativ a sdílení příběhů.',
            },
          ]}
        ></SectionsAU>
      </Box>

      <Box style={{ width: '100vw', height: '100vh' }}>
        <SectionsAU
          title={'Jak se můžete připojit:'}
          cards={[
            {
              title: 'Komunita',
              img: 'img/komunita.png',
              alt: 'ikona komunity',
              content:
                'Přidejte se k nám a najděte spojení s lidmi, kteří sdílejí vaše hodnoty a zkušenosti.',
            },
            {
              title: 'Zdroje',
              img: 'img/zdroje.png',
              alt: 'ikona zdrojů',
              content:
                'Pokud byste chtěli přispět svým časem, financemi nebo vědomostmi, ozvěte se nám. Budeme rádi!',
            },

            {
              title: 'Příběhy',
              img: 'img/pribehy.png',
              alt: 'ikona příběhů',
              content:
                'Sdílejte své příběhy nebo najděte podporu ve sdílení příběhů ostatních. Každý příběh má sílu změnit perspektivu.',
            },
          ]}
        >
          <Typography textAlign={'center'} variant="body1">
            Připojte se k nám na cestě ke sdílení lásky, porozumění a vytváření
            inkluzivního prostředí pro všechny. Společně můžeme tvořit změnu!
          </Typography>
        </SectionsAU>
        <Container
          sx={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'justify',
          }}
        >
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
        </Container>
      </Box>
    </GenericPage>
  );
};
