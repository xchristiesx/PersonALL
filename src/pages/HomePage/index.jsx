import { GenericPage } from '../../components/GenericPage.jsx';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <GenericPage>
      <Grid
<<<<<<< HEAD
        height={'calc(100vh-64px)'}
=======
>>>>>>> a7648e2 ( Kostra stránky o nás)
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: 'calc(100vh - 64px)' }}
      >
        <Typography variant="h1" gutterBottom align='center'>
          “It's not personal it's PersonALL.”
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <i>
            Společně se snažíme budovat prostředí, kde se každý může cítit
            akceptován a oceněn a doufáme, že i skutečně inklusivní společnost.
          </i>
        </Typography>
        <Button
          onClick={() => navigate('test')}
          sx={{
            marginTop: '10rem',
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
