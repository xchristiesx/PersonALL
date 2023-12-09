import React from 'react';
import { GenericPage } from '../components/GenericPage.jsx';
import animationData from '../resources/Animation-Contacts.json';
import Lottie from 'lottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

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
                width: '70%',
                margin: 'auto',
                borderRadius: 8,
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                backgroundColor: '#f5e1a4',
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
                (pro děti, mládež a studující do 26 let)
              </Typography>
              <Typography
                variant="h3"
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
                  linkabezpeci.cz
                </a>
              </Box>
            </Box>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="UsefulContacts">
            <Typography>
              Další užitečné kontakty
            </Typography>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Typography>
          A co takhle spojit se s námi? s lidmi, kteří vědí jaké to je? 
          </Typography>
        </SwiperSlide>
      </Swiper>
    </GenericPage>
  );
};

/*<SectionsAU
          title={''}
          cards={[

            {
              title: 'Terapeutická linka Sluchátko',
              img: 'img/contact.png',
              alt: 'ikona telefonu',
              Content:"116",
              content:
                'Anonymní linka pro mladé dospělé, jedince ve středním věku a seniory, které trápí úzkosti, stres, samota, partnerské vztahy, ztráta zaměstnání nebo blízkého. Linka nabízí konzultaci v rozsahu až 3 telefonátů v délce do 50 minut zdarma.',
              
                
            },

            {
              title: 'Dětské krizové centrum',
              img: 'img/contact.png',
              alt: 'ikona telefonu',
              content:
                'Krizové centrum pro děti z celé ČR do 18 let (studenti do 26 let) a jejich rodiny, které jsou ohroženy týráním (fyzicky a psychicky), zneužíváním, zanedbáváním, násilím a konflikty mezi rodiči, rozvodem, úmrtím, závažným onemocnění, šikanou nebo traumatem svědků násilných trestních činů. Službu je možné využít anonymně.',
            },
            {
              title: 'Linka první psychické pomoci',
              img: 'img/contact.png',
              alt: 'ikona telefonu',
              content:
                'Okamžitá telefonická pomoc pro všechny dospělé, kteří se ocitli v životní krizi nebo v náročné situaci a pociťují psychickou nepohodu, mají potíže ve vztazích či mají starost o svého blízkého a potřebují vyslechnout, nebo se poradit, jak postupovat dál.',
            },
            {
              title: 'Elpida - Linka seniorů',
              img: 'img/contact.png',
              alt: 'ikona telefonu',
              content:
                'Anonymní linka pro seniory, které trápí samota, životní ztráty, omezená pohyblivost, vážná nemoc, finanční tíseň, domácí násilí, šikana či různé aspekty stárnutí.',
            },
            
            {
              title: 'ROSA - Krizová linka pro oběti domácího násilí',
              img: 'img/contact.png',
              alt: 'ikona telefonu',
              content:
                'Linka pro všechny oběti domácího násilí a jejich blízké.',
            },
            {
              title: 'Linka pomoci Bílého kruhu bezpečí pro oběti kriminality a domácího násilí',
              img: 'img/contact.png',
              alt: 'ikona telefonu',
              content:
                'Linka pomoci pro oběti kriminality, domácího násilí a pro oběti a svědky různých trestných činů.',
            },
            
          ]}*/
