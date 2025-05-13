// AboutUs.jsx
import { Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container sx={{ padding: '2rem' }}>
      
      <Typography variant="body1" paragraph sx={{ mt: 15 }}>
        { }
        <Typography fontWeight={800}>Contact Us</Typography>
        <Typography fontWeight={600}>ADRESSES & CONTACT NUMBERS OF KPN BUREAU OFFICES</Typography>
        
        
        Skardu KPN Office, Qatal-gah Market, Yadgar Chowk, Skardu.
        <br />
        05815-454099 05815-454099
        <br />
        Gilgit KPN Office, Shaheed-e-Millat Road, Gilgit
        <br />
        05811-453446 05811-453446 3.
        <br />
        Ghizer KPN Office, Ghizer 05814-450375 05814-450375
        <br />
        Ghanche KPN Office, Main Bazar Khaplu, Faiz Bukhsh Road, Distt: Ghanche
        <br />
        05816-450328 05816-450328
        <br />
        Chillas KPN Office, Sartaj Khan Newspaper Agency, Saddar Bazar Chilas, Distt. Diamer
        <br />
        05812-450870 05812-450621 6. Karachi
        <br />
        <br />
        Islamabad (Head Office) KPN House, Service Road, Sohan, Expressway, Islamabad.
        051-2612181-86 Fax: 051-2612185
        { }
      </Typography>
    </Container>
  );
};

export default AboutUs;
