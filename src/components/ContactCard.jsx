import React from 'react';
import {Box, Typography, useMediaQuery} from '@mui/material';

const ContactCard = ({title, description, phoneNumber, websiteLink}) => {
    const isLargeScreen = useMediaQuery('(min-width:1700px)');
    const isScreen = useMediaQuery('(min-width:900px)');
    const isTablet = useMediaQuery('(min-width:600px)');
    const widthStyle = isLargeScreen ? '85%' : '100%';
    return (
        <Box
            sx={{
                width: widthStyle,
                height: '100%',
                borderRadius: 8,
                backgroundColor: 'primary.main',
                padding: '1.5rem',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <div>
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
                        textAlign: 'justify',
                        fontSize: (theme) => (isTablet && !isScreen ? theme.typography.pxToRem(14) : 'inherit'),
                    }}
                >
                    {description}
                </Typography>
            </div>
            <div>
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
                    {phoneNumber}
                </Typography>
            </div>

            <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: 'black',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    justifyContent: 'center',
                    backgroundColor: '#a3b18a',
                    boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                }}
            >
                <h5>Navštívit web</h5>
            </a>
        </Box>
    );
};

export default ContactCard;
