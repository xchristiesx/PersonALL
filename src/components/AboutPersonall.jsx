import React from "react";
import Typography from "@mui/material/Typography";

export const AboutPersonall = () => {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                PersonALL
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
                sx={{textAlign: 'justify', textAlignLast: 'center', userSelect: 'none', padding: '2rem'}}
            >
                <i>
                    Všichni si zasloužíme být součástí společnosti a cítit se v ní
                    vítáni a respektováni.
                </i>
                <br></br>
                <i>Bohužel to tak vždy není. Existuje mnoho lidí, kteří se mohou cítit vyčleněni ze společnosti z
                    důvodu svého původu, rasy, náboženství, sexuální orientace nebo
                    jiného faktoru.
                </i>
                <br></br>
                <i>
                    Našim cílem je toto změnit a každému jedinci, který se občas cítí,
                    že nezapadá do společnosti, ve které se často nachází, ať už se
                    jedná o školu, práci či volný čas, podali pomocnou ruku a prvních
                    pár rad, jak se s tím lépe vypořádat. Jak začít svou vlastní cestu k
                    lepšímu pocitu začlenění. Snažíme se vytvářet komunitu, kde je každý
                    hlas důležitý, a kde se setkávají různorodé příběhy, názory a
                    zkušenosti. Věříme, že můžeme pomoci vytvořit společnost, ve které
                    se každý cítí vítán a respektován. Jsme odhodláni pracovat na
                    dosažení těchto cílů a vytvářet svět, ve kterém je inkluze normou.
                </i>
            </Typography>

            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    padding: '2rem',
                }}
            >
                <i>PersonALL je váš společník na cestě k inkluzivitě a pochopení.</i>
            </Typography>
        </>
    )
}