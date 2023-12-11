import React from "react";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/system";
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "@mui/material";

export const Authors = () => {
    const isTablet = useMediaQuery('(min-width:600px)');
    const widthStyle = isTablet ? '20%' : '40%';
    return (
        <>
            <Typography variant="h2" gutterBottom>
                O projektu
            </Typography>
            <Typography variant="body1" gutterBottom
                        sx={{userSelect: 'none', marginBottom: '1rem', alignContent: 'justify'}}>
                První stavební cihla tohoto projektu PersonALL byla položena díky již existující úžasné komunitě
                Czechitas. V dnešní digitální společnosti, kde jsme všichni od sebe vzdálenější, je nesmírně důležité
                hledat způsoby, které nás mohou nadále sbližovat a podporovat naše sociální vazby. Díky Digitální
                Akademii Web jsme my, Christelle a Adél, měly možnost získat dovednosti, které nám umožnily sestavit
                tento web jako náš závěrečný projekt.
            </Typography>
            <Typography variant="body1" gutterBottom
                        sx={{userSelect: 'none', marginBottom: '4rem', alignContent: 'justify'}}>
                Speciální poděkování patří našim skvělým mentorům Olesyi a Iljovi.
            </Typography>

            <Typography variant="h5" gutterBottom
                        sx={{userSelect: 'none', marginBottom: '2rem', alignContent: 'justify'}}>
                Kde nás najdete
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '2rem'}}>
                    <img src="/img/adela.jpg" alt="Profile picture Adela"
                         style={{width: widthStyle, height: 'auto', borderRadius: '50%'}}/>
                    <a href="https://www.linkedin.com/in/adela-fialova/" target="_blank" rel="noopener noreferrer"
                       style={{color: 'black', textDecoration: 'underline', cursor: 'pointer', marginTop: '0.5rem'}}>
                        <Typography variant="h7">Adéla</Typography>
                    </a>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src="/img/christelle.jpg" alt="Profile picture Christelle"
                         style={{width: widthStyle, height: 'auto', borderRadius: '50%'}}/>
                    <a href="https://www.linkedin.com/in/christelle-linda-natabou/" target="_blank"
                       rel="noopener noreferrer"
                       style={{color: 'black', textDecoration: 'underline', cursor: 'pointer', marginTop: '0.5rem'}}>
                        <Typography variant="h7">Christelle</Typography>
                    </a>
                </div>
            </div>
        </>
    )
}