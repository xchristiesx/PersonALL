import React from 'react';
import { GenericPage } from '../components/GenericPage.jsx';
import animationData from '../resources/Animation-Contacts.json';
import Lottie from 'lottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import '../global.css';
import Typography from '@mui/material/Typography';


export const Contacts = () => {
  return (
    <GenericPage>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="AllContacts">
            <Box
              sx={{
                width: '80%',
                margin: 'auto',
                borderRadius: 8,
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: '#f5e1a4',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'primary',
                }}
              >
                Linka bezpečí
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Linka důvěry pro děti a mládež do 18 let (a pro studenty do 26
                let), kteří se ocitli v náročné životní situaci a potřebují
                pomoc.
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                116 111
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="https://www.linkabezpeci.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ marginLeft: '5px', color: 'primary' }}
                >
                  Navšívit web
                </a>
              </Box>
            </Box>

            <Box
              sx={{
                width: '80%',
                margin: 'auto',
                borderRadius: 8,
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: '#f5e1a4',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'primary',
                }}
              >
                Terapeutická linka Sluchátko
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Anonymní linka všechny dospělé, které trápí úzkosti, stres,
                samota, partnerské vztahy, ztráta zaměstnání nebo blízkého.
                Linka nabízí konzultaci až 3 telefonátů v délce do 50 minut
                zdarma.
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                212 812 540
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="https://www.linkasluchatko.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ marginLeft: '5px', color: 'primary' }}
                >
                  Navšívit web
                </a>
              </Box>
            </Box>

            <Box
              sx={{
                width: '80%',
                margin: 'auto',
                borderRadius: 8,
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: '#f5e1a4',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'primary',
                }}
              >
                Elpida - Linka seniorů
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Anonymní linka pro seniory, které trápí samota, životní ztráty,
                omezená pohyblivost, vážná nemoc, finanční tíseň, domácí násilí,
                šikana či různé aspekty stárnutí.
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                800 200 007
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="https://linka-senioru.elpida.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    marginLeft: '5px',
                    color: 'inherit',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Navšívit web
                </a>
              </Box>
            </Box>
            <Box
              sx={{
                width: '80%',
                margin: 'auto',
                borderRadius: 8,
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: '#f5e1a4',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'primary',
                }}
              >
                Projekt Parafilik
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Odborná pomoc pro osoby s problematickým nastavením sexuality a
                jejich blízké. Služba nabízí těmto osobám pravidelná
                terapeutická setkání, online poradnu a linku telefonické krizové
                intervence.
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                317 071 668
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="https://parafilik.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ marginLeft: '5px', color: 'primary' }}
                >
                  Navšívit web
                </a>
              </Box>
            </Box>

            <Box
              sx={{
                width: '80%',
                margin: 'auto',
                borderRadius: 8,
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: '#f5e1a4',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'primary',
                }}
              >
                ROSA - Krizová linka pro oběti domácího násilí
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Linka pro všechny oběti domácího násilí a jejich blízké.
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                800 60 50 80; 241 432 466; 602 246 102;
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="https://www.rosacentrum.cz/nase-sluzby/telefonicka-krizova-pomoc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ marginLeft: '5px', color: 'primary' }}
                >
                  Navšívit web
                </a>
              </Box>
            </Box>

            <Box
              sx={{
                width: '80%',
                margin: 'auto',
                borderRadius: 8,
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: '#f5e1a4',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Typography
                variant="h7"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'primary',
                }}
              >
                Linka pomoci Bílého kruhu bezpečí pro oběti kriminality a
                domácího násilí
              </Typography>
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Linka pomoci pro oběti kriminality, domácího násilí a pro oběti
                a svědky různých trestných činů.
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                257 317 110 nebo 116 006
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="https://www.116006.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ marginLeft: '5px', color: 'primary' }}
                >
                  Navšívit web
                </a>
              </Box>
            </Box>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="UsefulContacts">
            <Lottie
              animationData={animationData}
              autoRemove={false}
              delay={900000}
              style={{
                width: 250,
                height: 250,
                position: 'absolute',
                top: '15%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <Typography>Další užitečné kontakty</Typography>
          </div>
          <div class="QR">
            <Typography variant="h5" gutterBottom>
              A co takhle spojit se s námi? s lidmi, kteří vědí jaké to je?
            </Typography>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
              }}
            >
              <h1>QR kód</h1>
              <br></br>
              <img
                src="../img/MyQR.png"
                alt="QR kód na Discord komunitu"
                style={{ width: '150px', height: '200px' }}
              />
            </div>
            <a
      href="https://discord.gg/XCjsESxQ"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'black',    
        textDecoration: 'none',
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        display: 'inline-block',
        padding: '5px',
        border: '2px solid rgba(255, 217, 0, 0.599)',
        borderRadius: '15px'   
      
      }}
    >
      <h5>Let's PersonALL together.</h5>
    </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          
        </SwiperSlide>
      </Swiper>
     
    </GenericPage>
    
  );
};

/*
- První swiper rozdělit na 1 grid a pak každý kontakt do jiného gridu či divu a nastylovat pomocí CSS, aby byli všechny boxy stejně velké
- Přidat další užitečné odkazy a to konkrétně na nevpusť duši, rozcestník všech kontaktu
- pohrát si s poslední stránkou a odkazem na discord
- založit komunitu na diskordu s úvodním slovem
*/
