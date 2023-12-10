import React from 'react';
import SectionsAU from '../components/SectionsAU.jsx';
import { GenericPage } from '../components/GenericPage.jsx';
import {Container, useMediaQuery} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import {useTheme} from "@mui/system";


export default function Conditions() {
  const [isConditionsChecked, setIsConditionsChecked] = React.useState(false);
  const navigate = useNavigate();
    const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
    <GenericPage>
      <Box
      sx={{
          [theme.breakpoints.up('sm')]: {
              margin: '3rem',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '1rem',
          },
          [theme.breakpoints.down('xs')]: {
              margin: '1rem',
          },
          [theme.breakpoints.up('md')]: {
              margin: '3rem',
          },
          [theme.breakpoints.up('lg')]: {
              margin: '8rem',
                marginTop: '4rem',
          },
      }}
      
      >
      <SectionsAU
        title={
          'Vyplňte krátký test pro lepší identifikaci situace, ve které se nacházíte a nalezení ideální rady. '
        }
        cards={[
          {
            title: 'Bezpečný',
            img: 'img/bezpecny.png',
            alt: 'ikona Bezpečný',

            content:
              'Vyplnění testu je zcela anonymní. Anonymizovaná data slouží pouze k průzkumu míry pocitu inkluzivity v ČR.',
          },
          {
            title: 'Anonymní',
            img: 'img/anonymni.png',
            alt: 'ikona anonymní',

            content:
              'Vyplnění testu zabere pouze chvíli a nepřináší s sebou žádné nepříjemné stavy či nebezpečí.',
          },

          {
            title: 'Dobrovolný',
            img: 'img/dobrovolny.png',
            alt: 'ikona dobrovolný',
            content:
              'Vyplnění testu je naprosto dobrovolné. Kdykoliv v průběhu vyplňování se můžete rozhodnout nepokračovat.',
          },
        ]}
      >
        <Container
          sx={{
            flexDirection: 'column',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormGroup>
            <FormControlLabel
              required
              control={
                <Checkbox
                  checked={isConditionsChecked}
                  onChange={(event) =>
                    setIsConditionsChecked(event.target.checked)
                  }
                  color="info"
                />
              }
              label={
                <>
                  Prohlašuji, že jsem si přečetl/a výše uvedené informace
                  souhlasím s nimi.
                  <a href="terms"> Zásady ochrany osobních údajů</a>
                </>
              }
            />
          </FormGroup>
          <Button
            disabled={!isConditionsChecked}
            onClick={() => navigate('/test')}
            sx={{
              marginTop: '3rem',
              width: 'fit-content',
            }}
            variant="contained"
            color="secondary"
            size="large"
          >
            Potřebuji pomoc
          </Button>
        </Container>
      </SectionsAU>
      </Box>
    </GenericPage>
  );
}
