import React from 'react';
import { GenericPage } from '../components/GenericPage.jsx';
import Typography from '@mui/material/Typography';
import SectionsAU from '../components/SectionsAU.jsx';
import { Container, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import '../global.css';
import { Authors } from '../components/Authors.jsx';
import { AboutPersonall } from '../components/AboutPersonall.jsx';

export const AboutUs = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isTablet = useMediaQuery('(min-width:600px)');
  return (
    <GenericPage>
      {isTablet ? (
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="about-swiper"
        >
          <SwiperSlide>
            <Box
              sx={{
                width: '80%',
                margin: '5rem',
                borderRadius: 8,
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 0 5px #c9c4a9',
                backgroundColor: '#ffe8ca',
              }}
            >
              {' '}
              <AboutPersonall />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                width: '80%',
                margin: '3rem auto',
                borderRadius: 8,
                bgcolor: 'primary.main',
                boxShadow: '0 0 5px #c9c4a9',
                backgroundColor: '#ffe8ca',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <Authors />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              style={{
                width: '100vw',
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
                    alt: 'ikona vzdelavani',
                    content:
                      'Rozšiřujeme povědomí o inkluzivitě a bojujeme proti stereotypům prostřednictvím osvětových iniciativ a sdílení příběhů.',
                  },
                ]}
              ></SectionsAU>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box style={{ width: '100vw', justifyContent: 'center' }}>
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
                  Připojte se k nám na cestě ke sdílení lásky, porozumění a
                  vytváření inkluzivního prostředí pro všechny. Společně můžeme
                  tvořit změnu!
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
          </SwiperSlide>
        </Swiper>
      ) : (
        <>
          <div
            style={{
              width: '80%',
              margin: '3rem auto',
              borderRadius: 8,
              bgcolor: 'primary.main',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 0 5px #c9c4a9',
              backgroundColor: '#ffe8ca',
            }}
          >
            <AboutPersonall />
          </div>
          ,
          <div
            style={{
              width: '80%',
              margin: '3rem auto',
              borderRadius: 8,
              bgcolor: 'primary.main',
              boxShadow: '0 0 5px #c9c4a9',
              backgroundColor: '#ffe8ca',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <Authors />
          </div>
          ,
          <div
            style={{
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
                  alt: 'ikona vzdelavani',
                  content:
                    'Rozšiřujeme povědomí o inkluzivitě a bojujeme proti stereotypům prostřednictvím osvětových iniciativ a sdílení příběhů.',
                },
              ]}
            ></SectionsAU>
          </div>
          ,
          <div style={{ justifyContent: 'center' }}>
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
                Připojte se k nám na cestě ke sdílení lásky, porozumění a
                vytváření inkluzivního prostředí pro všechny. Společně můžeme
                tvořit změnu!
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
          </div>
        </>
      )}
    </GenericPage>
  );
};
