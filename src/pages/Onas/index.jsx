import { GenericPage } from '../../components/GenericPage.jsx';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import { Grid, FormGroup, FormControlLabel, Checkbox } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <GenericPage>
      <Grid
        height={'100vh'}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
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

      <Typography variant="h6" gutterBottom> Naše cíle: </Typography>
      <Grid container spacing={3}>
        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="obrázek inklusivity"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Inklusivita
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Budujeme prostředí bez předsudků, kde každý má možnost být slyšen a oceněn. Chceme podporovat dialog o rozmanitosti a vzájemném respektu.
            </Typography>
          </CardContent>
        </Grid>

        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="obrázek podpory"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Podpora
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Poskytujeme zdroje a prostor pro ty, kteří hledají podporu v
              situacích spojených s vyčleněním. Máme tu pro vás.
            </Typography>
          </CardContent>
        </Grid>

        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="obrázek vzdělávání"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vzdělávání
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rozšiřujeme povědomí o inkluzivitě a bojujeme proti stereotypům
              prostřednictvím osvětových iniciativ a sdílení příběhů.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    
      <Typography variant="h6" gutterBottom> Jak se můžete připojit: </Typography>
      <Grid container spacing={3}>
        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Komunita
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Přidejte se k nám a najděte spojení s lidmi, kteří sdílejí vaše hodnoty a zkušenosti.
            </Typography>
          </CardContent>
        </Grid>

        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Zdroje
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Pokud byste chtěli přispět svým časem, financemi nebo vědomostmi, ozvěte se nám. Budeme rádi!
            </Typography>
          </CardContent>
        </Grid>

        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Příběhy
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Sdílejte své příběhy nebo najděte podporu ve sdílení příběhů ostatních. Každý příběh má sílu změnit perspektivu.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom>
        Vyplňte krátký test pro lepší identifikaci situace, ve které se nacházíte a nalezení ideální rady. 
        </Typography>
      <Grid container spacing={3}>
        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bezpečný
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Vyplnění testu je naprosto anonymní.
            Anonymizovaná data slouží pouze k  průzkumu míry pocitu inklusivity v ČR.
            </Typography>
          </CardContent>
        </Grid>

        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Anonymní
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Vyplnění testu zabere pouze chvíli a nepřináší s sebou žádné nepříjemné stavy či nebezpečí.
            </Typography>
          </CardContent>
        </Grid>

        <Grid md={4}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dobrovolný
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Vyplnění testu je naprosto dobrovolné. Kdykoliv v průběhu vyplňování se můžete rozhodnout nepokračovat.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>


      export default function CheckboxLabels() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <Grid container md={4}>
      <FormGroup id="labels">
        <FormControlLabel
          control={<Checkbox id="label1" name="label1" defaultChecked={isChecked1} />}
          label={
            <Typography>
              Prohlašuji, že jsem si přečetl/a výše uvedené informace a souhlasím s nimi.
            </Typography>
          }
        />
        <FormControlLabel
          control={<Checkbox id="label2" name="label2" defaultChecked={isChecked2} />}
          label={
            <Typography>
              Spuštěním testu souhlasím se zpracováváním dat dle{' '}
              <a href="/zpracovani-dat">Zásad Ochrany Osobních Údajů</a>.
            </Typography>
          }
        />
      </FormGroup>
    </Grid>
  );
}
  </GenericPage>
  );
};
