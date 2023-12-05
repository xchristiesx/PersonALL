import React from 'react';
import { GenericPage } from '../components/GenericPage.jsx';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

export const Terms = () => {
  return (
    <GenericPage>
      <ThemeProvider theme={{ palette: { primary: { main: '#ffe8ca' } } }}>
        <Box
          sx={{
            width: '80%',
            margin: 'auto',
            borderRadius: 8,
            bgcolor: 'primary.main',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'justify',
            padding: '2rem',
            boxShadow: '5px 5px grey',
          }}
        >
          <Typography variant="h2" gutterBottom>
            Zásady ochrany osobních údajů
          </Typography>

          <Typography variant="body1" gutterBottom>
            <h4>I. základní ustanovení </h4>
            <i>
              Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského
              parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
              souvislosti se zpracováním osobních údajů a o volném pohybu těchto
              údajů (dále jen: „GDPR”) je _____________doplnit______________
              (dále jen: „správce“). Kontaktní údaje správce jsou: adresa:
              _____________doplnit______________ email:
              _____________doplnit______________ telefon:
              _____________doplnit______________ Osobními údaji se rozumí
              veškeré informace o identifikované nebo identifikovatelné fyzické
              osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou
              lze přímo či nepřímo identifikovat, zejména odkazem na určitý
              identifikátor, například jméno, identifikační číslo, lokační
              údaje, síťový identifikátor nebo na jeden či více zvláštních prvků
              fyzické, fyziologické, genetické, psychické, ekonomické, kulturní
              nebo společenské identity této fyzické osoby.{' '}
            </i>
            <h4>II. zdroje a kategorie</h4>
            <i>
              zpracovávaných osobních údajů Správce zpracovává osobní údaje,
              které jste mu poskytl/a nebo osobní údaje, které správce získal na
              základě plnění Vaší objednávky: jméno a příjmení e-mailová adresa
              poštovní adresa telefon Správce zpracovává Vaše identifikační a
              kontaktní údaje a údaje nezbytné pro plnění smlouvy.
            </i>
            <h4>III. zákonný důvod a účel</h4>
            <i>
              zpracování osobních údajů Zákonným důvodem zpracování osobních
              údajů je plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1
              písm. b) GDPR, splnění právní povinnosti správce podle čl. 6 odst.
              1 písm. c) GDPR, oprávněný zájem správce na poskytování přímého
              marketingu (zejména pro zasílání obchodních sdělení a newsletterů)
              podle čl. 6 odst. 1 písm. f) GDPR, Váš souhlas se zpracováním pro
              účely poskytování přímého marketingu (zejména prozasílání
              obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. a)
              GDPR ve spojení s § 7 odst. 2 zákona č. 480/2004 Sb., o některých
              službách informační společnosti v případě, že nedošlo k objednávce
              zboží nebo služby Účelem zpracování osobních údajů je vyřízení
              Vaší objednávky a výkon práv a povinností vyplývajících ze
              smluvního vztahu mezi Vámi a správcem; při objednávce jsou
              vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení
              objednávky (jméno a adresa, kontakt), poskytnutí osobních údajů je
              nutným požadavkem pro uzavření a plnění smlouvy, bez poskytnutí
              osobních údajů není možné smlouvu uzavřít či jí ze strany správce
              plnit, plnění právních povinností vůči státu, zasílání obchodních
              sdělení a činění dalších marketingových aktivit. Ze strany správce
              nedochází k automatickému individuálnímu rozhodování ve smyslu čl.
              22 GDPR. S takovým zpracováním jste poskytl/a svůj výslovný
              souhlas.
            </i>
            <h4>IV. doba uchovávání údajů Správce uchovává osobní</h4>
            <i>
              {' '}
              Údaje po dobu nezbytnou k výkonu práv a povinností vyplývajících
              ze smluvního vztahu mezi Vámi a správcem a uplatňování nároků z
              těchto smluvních vztahů (po dobu 5 let od ukončení smluvního
              vztahu). po dobu, než je odvolán souhlas se zpracováním osobních
              údajů pro účely marketingu, nejdéle 10 let, jsou-li osobní údaje
              zpracovávány na základě souhlasu. Po uplynutí doby uchovávání
              osobních údajů správce osobní údaje vymaže.
            </i>
            <h4>V. příjemci osobních údajů </h4>
            <i>
              {' '}
              (subdodavatelé správce) Příjemci osobních údajů jsou osoby
              podílející se na realizaci plateb a realizaci a dodání služeb na
              základě smlouvy, zajišťující služby v oblasti oční optiky a další
              služby související s provozováním oční optiky zajišťující
              marketingové služby. Správce nemá v úmyslu předat osobní údaje do
              třetí země (do země mimo EU) nebo mezinárodní organizaci.
            </i>
            <h4>VI. vaše práva </h4>
            <i>
              Za podmínek stanovených v GDPR máte právo na přístup ke svým
              osobním údajům dle čl. 15 GDPR, právo opravu osobních údajů dle
              čl. 16 GDPR, popřípadě omezení zpracování dle čl. 18 GDPR, právo
              na výmaz osobních údajů dle čl. 17 GDPR, právo vznést námitku
              proti zpracování dle čl. 21 GDPR, právo na přenositelnost údajů
              dle čl. 20 GDPR a právo odvolat souhlas se zpracováním písemně
              nebo elektronicky na adresu nebo e-mail správce uvedený v čl. III
              těchto podmínek. Dále máte právo podat stížnost u Úřadu pro
              ochranu osobních údajů v případě, že se domníváte, že bylo
              porušeno Vaše právo na ochranu osobních údajů, případně se obrátit
              na soud.
            </i>
            <h4>VII. podmínky</h4>
            <i>
              Zabezpečení osobních údajů Správce prohlašuje, že přijal veškerá
              vhodná technická a organizační opatření k zabezpečení osobních
              údajů. Správce přijal technická opatření k zabezpečení datových
              úložišť a úložišť osobních údajů v listinné podobě. Správce
              prohlašuje, že k osobním údajům mají přístup pouze jím pověřené
              osoby.
            </i>
            <h4>VIII. závěrečná ustanovení</h4>
            <i>
              Odesláním objednávky z internetového objednávkového formuláře
              potvrzujete, že jste seznámen/a s podmínkami ochrany osobních
              údajů a že je v celém rozsahu přijímáte. S těmito podmínkami
              souhlasíte zaškrtnutím souhlasu prostřednictvím internetového
              formuláře. Zaškrtnutím souhlasu potvrzujete, že jste seznámen/a s
              podmínkami ochrany osobních údajů a že je v celém rozsahu
              přijímáte. Správce je oprávněn tyto podmínky změnit. Novou verzi
              podmínek ochrany osobních údajů zveřejní na svých internetových
              stránkách a zároveň Vám zašle novou verzi těchto podmínek Vaši
              e-mailovou adresu, kterou jste správci poskytl/a.
            </i>
          </Typography>
          <Typography
            variant="body1"
            sx={{ alignContent: 'center', margin: '2rem' }}
          >
            <i>Tyto podmínky nabývají účinnosti dnem 1. 1. 2023.</i>
          </Typography>
        </Box>
      </ThemeProvider>
    </GenericPage>
  );
};
