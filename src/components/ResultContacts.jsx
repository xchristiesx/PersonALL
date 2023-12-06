import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import 'swiper/css';
import {EffectCoverflow, Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';


export const ResultContacts = () => {
    return (
        <>
            <Typography variant="h4" component='div' marginBottom='1rem' marginTop='5rem' align='center'
                        style={{userSelect: 'none'}}>
                <span>Kam dál?</span>
            </Typography>
            <ThemeProvider theme={{palette: {primary: {main: '#fefae0'},},}}>
                <Box sx={{
                    width: 'auto',
                    margin: '4rem',
                    marginTop: '1rem',
                    bgcolor: 'primary.main',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}>
                    <Typography variant="body1" component="div" sx={{alignItems: 'center'}}>
                        <Swiper
                            pagination={{clickable: true}}
                            scrollbar={{draggable: true}}
                            modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}
                            slidesPerView={2}
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            coverflowEffect={{rotate: 0, stretch: 5, depth: 200, modifier: 1, slideShadows: false}}
                            initialSlide={1} //depends on the number of swiperslides. considering we have only three, I manually entered index 1
                        >
                            <SwiperSlide>
                                <ThemeProvider theme={{palette: {primary: {main: '#f5e1a4'},},}}>
                                    <Box sx={{
                                        width: '70%',
                                        margin: 'auto',
                                        borderRadius: 8,
                                        bgcolor: 'primary.main',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '2rem'
                                    }}>
                                        <Typography variant="h5" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            color: 'primary'
                                        }}>
                                            Linka pro rodinu a školu
                                        </Typography>
                                        <Typography variant="body1" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            (pro dospělé, kteří mají starost o dítě)
                                        </Typography>
                                        <Typography variant="h3" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold'
                                        }}>
                                            116 000
                                        </Typography>
                                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <a href="https://linkaztracenedite.cz/"
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               sx={{marginLeft: '5px', color: 'primary'}}>
                                                linkaztracenedite.cz
                                            </a>
                                        </Box>
                                    </Box>
                                </ThemeProvider>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ThemeProvider theme={{palette: {primary: {main: '#f5e1a4'},},}}>
                                    <Box sx={{
                                        width: '70%',
                                        margin: 'auto',
                                        borderRadius: 8,
                                        bgcolor: 'primary.main',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '2rem'
                                    }}>
                                        <Typography variant="h5" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            color: 'primary'
                                        }}>
                                            Linka bezpečí
                                        </Typography>
                                        <Typography variant="body1" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            (pro děti, mládež a studující do 26 let)
                                        </Typography>
                                        <Typography variant="h3" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold'
                                        }}>
                                            116 111
                                        </Typography>
                                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <a href="https://www.linkabezpeci.cz/"
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               sx={{marginLeft: '5px', color: 'primary'}}>
                                                linkabezpeci.cz
                                            </a>
                                        </Box>
                                    </Box>
                                </ThemeProvider>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ThemeProvider theme={{palette: {primary: {main: '#f5e1a4'},},}}>
                                    <Box sx={{
                                        width: '70%',
                                        margin: 'auto',
                                        borderRadius: 8,
                                        bgcolor: 'primary.main',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '2rem'
                                    }}>
                                        <Typography variant="h5" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            color: 'primary'
                                        }}>
                                            Linka první psychické pomoci
                                        </Typography>
                                        <Typography variant="body1" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            (pro dospělé od 18 let)
                                        </Typography>
                                        <Typography variant="h3" component="div" gutterBottom sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold'
                                        }}>
                                            116 123
                                        </Typography>
                                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <a href="https://linkapsychickepomoci.cz/"
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               sx={{marginLeft: '5px', color: 'primary'}}>
                                                linkapsychickepomoci.cz
                                            </a>
                                        </Box>
                                    </Box>
                                </ThemeProvider>
                            </SwiperSlide>
                        </Swiper>
                    </Typography>
                </Box>
            </ThemeProvider>
        </>
    )
}