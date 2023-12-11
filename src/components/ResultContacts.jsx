import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box, useMediaQuery} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import 'swiper/css';
import {
    EffectCoverflow,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperSlideComponent from "./SwiperSlideComponent.jsx";
import {useTheme} from "@mui/system";

export const ResultContacts = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery('(min-width:750px)');
    const isDesktop = useMediaQuery('(min-width:1000px)');
    const swiperDepth = isDesktop ? 450 : 350;
    const swiperSpace = isDesktop ? 0 : 50;

    return (
        <>
            <Typography
                variant="h4"
                component="div"
                marginBottom="1rem"
                marginTop="5rem"
                align="center"
                style={{userSelect: 'none'}}
            >
                <span>Kam dál?</span>
            </Typography>
            <ThemeProvider theme={{palette: {primary: {main: '#fefae0'}}}}>
                <Box
                    sx={{
                        width: 'auto',
                        marginTop: '1rem',
                        bgcolor: 'primary.main',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem',
                    }}
                >
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{alignItems: 'center'}}
                    >
                        {isTablet ? (
                            <Swiper
                                pagination={{clickable: true}}
                                scrollbar={{draggable: true}}
                                modules={[
                                    EffectCoverflow,
                                    Navigation,
                                    Pagination,
                                    Scrollbar,
                                    A11y,
                                ]}
                                spaceBetween={swiperSpace}
                                slidesPerView={2}
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 50,
                                    depth: swiperDepth,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                initialSlide={1} //depends on the number of swiperslides. considering we have only three, I manually entered index 1
                            >
                                <SwiperSlide>
                                    <SwiperSlideComponent
                                        title="Linka pro rodinu a školu"
                                        description="(pro dospělé, kteří mají starost o dítě)"
                                        phoneNumber="116 000"
                                        websiteLink="https://linkaztracenedite.cz/"
                                        backgroundColor="#f5e1a4"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <SwiperSlideComponent
                                        title="Linka bezpečí"
                                        description="(pro děti, mládež a studující do 26 let)"
                                        phoneNumber="116 111"
                                        websiteLink="https://www.linkabezpeci.cz/"
                                        backgroundColor="#f5e1a4"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <SwiperSlideComponent
                                        title="Linka první psychické pomoci"
                                        description="(pro dospělé od 18 let)"
                                        phoneNumber="116 123"
                                        websiteLink="https://linkapsychickepomoci.cz/"
                                        backgroundColor="#f5e1a4"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        ) : (
                            <Box
                                sx={{
                                    width: 'auto',
                                    marginTop: '1rem',
                                    bgcolor: 'primary.main',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '1rem',
                                }}
                            >
                                <SwiperSlideComponent
                                    title="Linka pro rodinu a školu"
                                    description="(pro dospělé, kteří mají starost o dítě)"
                                    phoneNumber="116 000"
                                    websiteLink="https://linkaztracenedite.cz/"
                                    backgroundColor="#f5e1a4"
                                />,
                                <SwiperSlideComponent
                                    title="Linka bezpečí"
                                    description="(pro dospělé, kteří mají starost o dítě)"
                                    phoneNumber="116 000"
                                    websiteLink="https://linkaztracenedite.cz/"
                                    backgroundColor="#f5e1a4"
                                />,
                                <SwiperSlideComponent
                                    title="Linka první psychické pomoci"
                                    description="(pro dospělé, kteří mají starost o dítě)"
                                    phoneNumber="116 000"
                                    websiteLink="https://linkaztracenedite.cz/"
                                    backgroundColor="#f5e1a4"
                                />
                            </Box>
                        )
                        }
                    </Typography>
                </Box>
            </ThemeProvider>
        </>
    );
};
