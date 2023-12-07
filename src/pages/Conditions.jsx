import React from 'react';
import SectionsAU from '../components/SectionsAU.jsx';
import { GenericPage } from '../components/GenericPage.jsx';
import { Container } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Conditions() {
  const [isConditionsChecked, setIsConditonsChecked] = React.useState(false);
  const navigate = useNavigate();
  return (
    <GenericPage>
      <SectionsAU
        title={
          'Vyplňte krátký test pro lepší identifikaci situace, ve které se nacházíte a nalezení ideální rady. '
        }
        cards={[
          {
            title: 'Bezpečný',
            img: 'img/bezpecny.jpg',
            content:
              'Vyplnění testu je zcela anonymní. Anonymizovaná data slouží pouze k průzkumu míry pocitu inkluzivity v ČR.',
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
                    setIsConditonsChecked(event.target.checked)
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
    </GenericPage>
  );
}
