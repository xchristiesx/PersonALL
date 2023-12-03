import React from 'react';
import { GenericPage } from '../components/GenericPage.jsx';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SectionsAU from '../components/SectionsAU.jsx';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <GenericPage>
      <Grid
        height={'calc(100vh - 64px - 56px)'}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        margin={7}
      >
        <Typography variant="h1" gutterBottom>
          O nás
        </Typography>

        <Typography variant="body1" gutterBottom>
          Všichni si zasloužíme být součástí společnosti a cítit se v ní vítáni
          a respektováni. Bohužel to tak vždy není. Existuje mnoho lidí, kteří
          se mohou cítit vyčleněni ze společnosti z důvodu svého původu, rasy,
          náboženství, sexuální orientace nebo jiného faktoru. Našim cílem je
          toto změnit a každému jedinci, který se občas cítí, že nezapadá do
          společnosti, ve které se často nachází, ať už se jedná o školu, práci
          či volný čas, podali pomocnou ruku a prvních pár rad, jak se s tím
          lépe vypořádat. Jak začít svou vlastní cestu k lepšímu pocitu
          začlenění. Snažíme se vytvářet komunitu, kde je každý hlas důležitý, a
          kde se setkávají různorodé příběhy, názory a zkušenosti. Věříme, že
          můžeme pomoci vytvořit společnost, ve které se každý cítí vítán a
          respektován. Jsme odhodláni pracovat na dosažení těchto cílů a
          vytvářet svět, ve kterém je inkluze normou.
        </Typography>

        <Typography variant="h6" gutterBottom>
          PersonALL je váš společník na cestě k inkluzivitě a pochopení.
        </Typography>
      </Grid>

      <SectionsAU
        title={'Naše cíle:'}
        cards={[
          {
            title: 'Inclusivita',
            img: 'img/inclusivita.jpg',
            content:
              'Budujeme prostředí bez předsudků, kde každý má možnost být slyšen a oceněn. Chceme podporovat dialog o rozmanitosti a vzájemném respektu.',
          },
          {
            title: 'Podpora',
            img: 'img/podpora.jpg',
            content:
              'Poskytujeme zdroje a prostor pro ty, kteří hledají podporu v situacích spojených s vyčleněním. Máme tu pro vás.',
          },

          {
            title: 'Vzdělávání',
            img: 'img/vzdelavani.jpg',
            content:
              'Rozšiřujeme povědomí o inkluzivitě a bojujeme proti stereotypům prostřednictvím osvětových iniciativ a sdílení příběhů.',
          },
        ]}
      >
      </SectionsAU>

      <SectionsAU
        title={'Jak se můžete připojit:'}
        cards={[
          {
            title: 'Komunita',
            img: 'img/komunita.jpg',
            content:
              'Přidejte se k nám a najděte spojení s lidmi, kteří sdílejí vaše hodnoty a zkušenosti.',
          },
          {
            title: 'Zdroje',
            img: 'img/zdroje.jpg',
            content:
              'Pokud byste chtěli přispět svým časem, financemi nebo vědomostmi, ozvěte se nám. Budeme rádi!',
          },

          {
            title: 'Příběhy',
            img: 'img/vzdelavani.jpg',
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

      <SectionsAU
        title={
          'Vyplňte krátký test pro lepší identifikaci situace, ve které se nacházíte a nalezení ideální rady. '
        }
        cards={[
          {
            title: 'Bezpečný',
            img: 'img/bezpecny.jpg',
            content:
              'Vyplnění testu je naprosto anonymní. Potřebujeme ale Anonymizovaná data slouží pouze k  průzkumu míry pocitu inklusivity v ČR.',
          },
          {
            title: 'Anonymní',
            img: 'img/anonymni.jpg',
            content:
              'Vyplnění testu zabere pouze chvíli a nepřináší s sebou žádné nepříjemné stavy či nebezpečí.',
          },

          {
            title: 'Dobrovolný',
            img: 'img/dobrovolny.jpg',
            content:
              'Vyplnění testu je naprosto dobrovolné. Kdykoliv v průběhu vyplňování se můžete rozhodnout nepokračovat.',
          },
        ]}
      >
        <Container
          sx={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}
        >
          <Button
            onClick={() => navigate('/conditions')}
            sx={{
              marginTop: '10rem',
            }}
            variant="contained"
            color="secondary"
            size="large"
          >
            {' '}
            Potřebuji pomoc
          </Button>
        </Container>
      </SectionsAU>
    </GenericPage>
  );
};
