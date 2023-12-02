import { GenericPage } from '../../components/GenericPage.jsx';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const HomePage = () => {
  return (
    <GenericPage>
      <Grid
        height={'100vh'}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '70vh' }}
      >
        <Typography variant="h1" gutterBottom>
          “It's not personal it's PersonALL.”
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <i>
            Společně se snažíme budovat prostředí, kde se každý může cítit
            akceptován a oceněn a doufáme, že i skutečně inklusivní společnost.
          </i>
        </Typography>
        <Button
          sx={{
            marginTop: '10rem',
          }}
          variant="contained"
          color="secondary"
        >
          Potřebuji pomoc
        </Button>
      </Grid>
    </GenericPage>
  );
};
