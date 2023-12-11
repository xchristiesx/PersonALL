import React from 'react';
import {GenericPage} from '../components/GenericPage.jsx';
import animationData from '../resources/Animation-Contacts.json';
import Lottie from 'lottie-react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Pagination} from 'swiper/modules';
import {useMediaQuery} from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import '../global.css';
import Typography from '@mui/material/Typography';
import ContactCard from "../components/ContactCard.jsx";
import {useTheme} from "@mui/system";

export const Contacts = () => {
    const isScreen = useMediaQuery('(min-width:900px)');
    const isTablet = useMediaQuery('(min-width:600px)');

    return (
        <GenericPage>
            {isTablet ? (
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    padding={'5rm'}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="swiper"
                >
                    <SwiperSlide>
                        <div className={isScreen ? "ScreenAllContacts" : "TabletAllContacts"}>
                            <ContactCard
                                title="Linka bezpečí"
                                description="Linka důvěry pro děti a mládež do 18 let (a pro studenty do 26 let), kteří se ocitli v náročné životní situaci a potřebují pomoc."
                                phoneNumber="116 111"
                                websiteLink="https://www.linkabezpeci.cz/"
                            />
                            <ContactCard
                                title="Terapeutická linka Sluchátko"
                                description="Anonymní linka všechny dospělé, které trápí úzkosti, stres, samota, partnerské vztahy, ztráta zaměstnání nebo blízkého. Linka nabízí konzultaci až 3 telefonátů v délce do 50 minut zdarma."
                                phoneNumber="212 812 540"
                                websiteLink="https://www.linkasluchatko.cz/"
                            />
                            <ContactCard
                                title="Elpida - Linka seniorů"
                                description="Anonymní linka pro seniory, které trápí samota, životní ztráty, omezená pohyblivost, vážná nemoc, finanční tíseň, domácí násilí, šikana či různé aspekty stárnutí."
                                phoneNumber="800 200 007"
                                websiteLink="https://linka-senioru.elpida.cz/"
                            />
                            <ContactCard
                                title="Projekt Parafilik"
                                description="Odborná pomoc pro osoby s problematickým nastavením sexuality a jejich blízké. Služba nabízí těmto osobám pravidelná terapeutická setkání, online poradnu a linku telefonické krizové intervence."
                                phoneNumber="317 071 668"
                                websiteLink="https://parafilik.cz/"
                            />
                            <ContactCard
                                title="ROSA - Krizová linka pro oběti domácího násilí"
                                description="Linka pro všechny oběti domácího násilí a jejich blízké."
                                phoneNumber="800 60 50 80; 241 432 466; 602 246 102"
                                websiteLink="https://www.rosacentrum.cz/nase-sluzby/telefonicka-krizova-pomoc/"
                            />
                            <ContactCard
                                title="Linka pomoci Bílého kruhu bezpečí"
                                description="Linka pomoci pro oběti kriminality, domácího násilí a pro oběti a svědky různých trestných činů."
                                phoneNumber="257 317 110; 116 006"
                                websiteLink="https://www.116006.cz/"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="UsefulContacts">
                            <Lottie
                                animationData={animationData}
                                delay={900000}
                                style={{
                                    width: 200,
                                    height: 200,
                                    left: "50%",
                                    top: "10%",
                                    position: 'absolute',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                            <div className="AllLinks">
                                <Typography variant="h7" gutterBottom>
                                    Zde najdeš všechny kontakty pro každou konkrétní situaci.
                                </Typography>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <h1>Rozcestník</h1>
                                    <br></br>
                                    <img
                                        src="/img/contact-book.png"
                                        alt="QR kód na Discord komunitu"
                                        style={{width: '170px', height: '200px'}}
                                    />
                                </div>
                                <a
                                    href="https://nevypustdusi.cz/kde-hledat-pomoc/?filters=no"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        padding: '5px',
                                        backgroundColor: '#a3b18a',
                                        boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                        borderRadius: '15px'
                                    }}
                                >
                                    <h5>Prohlédnout rozcestník.</h5>
                                </a>
                            </div>
                            <div className="QR">
                                <Typography variant="h7" gutterBottom>
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
                                        src="/img/myqr.png"
                                        alt="QR kód na Discord komunitu"
                                        style={{width: '150px', height: '200px'}}
                                    />
                                </div>
                                <a
                                    href="https://discord.gg/XCjsESxQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        padding: '5px',
                                        backgroundColor: '#a3b18a',
                                        boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                        borderRadius: '15px'
                                    }}
                                >
                                    <h5>Let's PersonALL together.</h5>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            ) : (
                <>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        margin: '20px',
                        marginBottom: '5rem'
                    }}>
                        <ContactCard
                            title="Linka bezpečí"
                            description="Linka důvěry pro děti a mládež do 18 let (a pro studenty do 26 let), kteří se ocitli v náročné životní situaci a potřebují pomoc."
                            phoneNumber="116 111"
                            websiteLink="https://www.linkabezpeci.cz/"
                        />
                        <ContactCard
                            title="Terapeutická linka Sluchátko"
                            description="Anonymní linka všechny dospělé, které trápí úzkosti, stres, samota, partnerské vztahy, ztráta zaměstnání nebo blízkého. Linka nabízí konzultaci až 3 telefonátů v délce do 50 minut zdarma."
                            phoneNumber="212 812 540"
                            websiteLink="https://www.linkasluchatko.cz/"
                        />
                        <ContactCard
                            title="Elpida - Linka seniorů"
                            description="Anonymní linka pro seniory, které trápí samota, životní ztráty, omezená pohyblivost, vážná nemoc, finanční tíseň, domácí násilí, šikana či různé aspekty stárnutí."
                            phoneNumber="800 200 007"
                            websiteLink="https://linka-senioru.elpida.cz/"
                        />
                        <ContactCard
                            title="Projekt Parafilik"
                            description="Odborná pomoc pro osoby s problematickým nastavením sexuality a jejich blízké. Služba nabízí těmto osobám pravidelná terapeutická setkání, online poradnu a linku telefonické krizové intervence."
                            phoneNumber="317 071 668"
                            websiteLink="https://parafilik.cz/"
                        />
                        <ContactCard
                            title="ROSA - Krizová linka pro oběti domácího násilí"
                            description="Linka pro všechny oběti domácího násilí a jejich blízké."
                            phoneNumber="800 60 50 80; 241 432 466; 602 246 102"
                            websiteLink="https://www.rosacentrum.cz/nase-sluzby/telefonicka-krizova-pomoc/"
                        />
                        <ContactCard
                            title="Linka pomoci Bílého kruhu bezpečí"
                            description="Linka pomoci pro oběti kriminality, domácího násilí a pro oběti a svědky různých trestných činů."
                            phoneNumber="257 317 110; 116 006"
                            websiteLink="https://www.116006.cz/"
                        />
                    </div>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            userSelect: 'none',
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        Další užitečné kontakty
                    </Typography>
                    <div className="AllLinks">
                        <Typography variant="h7" gutterBottom>
                            Zde najdeš všechny kontakty pro každou konkrétní situaci.
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <h1>Rozcestník</h1>
                            <br></br>
                            <img
                                src="/img/contact-book.png"
                                alt="QR kód na Discord komunitu"
                                style={{width: '170px', height: '200px'}}
                            />
                        </div>
                        <a
                            href="https://nevypustdusi.cz/kde-hledat-pomoc/?filters=no"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                                padding: '5px',
                                borderRadius: '15px',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center', // Center the content vertically
                                backgroundColor: '#a3b18a',
                                boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            <h5>Prohlédnout rozcestník.</h5>
                        </a>
                    </div>

                    <div className="QR">
                        <Typography variant="h7" gutterBottom>
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
                                src="/img/myqr.png"
                                alt="QR kód na Discord komunitu"
                                style={{width: '150px', height: '200px'}}
                            />
                        </div>
                        <a
                            href="https://discord.gg/XCjsESxQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                                padding: '5px',
                                borderRadius: '15px',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#a3b18a',
                                boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            <h5>Let's PersonALL together.</h5>
                        </a>
                    </div>
                </>
            )}
        </GenericPage>);
};

