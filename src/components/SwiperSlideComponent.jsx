import React from 'react';
import 'swiper/css';
import Typography from "@mui/material/Typography";
import {Box, useMediaQuery} from "@mui/material";


const SwiperSlideComponent = ({title, description, phoneNumber, websiteLink}) => {
    const isDesktop = useMediaQuery('(min-width:1000px)');
    const widthStyle = isDesktop ? '70%' : '80%';
    const paddingStyle = isDesktop ? '2rem' : '1.5rem';
    return (
        <>
            <Box
                sx={{
                    width: widthStyle,
                    margin: 'auto',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f5e1a4',
                    padding: paddingStyle,
                    boxShadow: "0 0 1px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)"

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
                    {title}
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
                    {description}
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
                    {phoneNumber}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <a
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{marginLeft: '5px', color: 'primary'}}
                    >
                        {websiteLink}
                    </a>
                </Box>
            </Box>
        </>
    );
};

export default SwiperSlideComponent;
