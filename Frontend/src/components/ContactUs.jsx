// AboutUs.jsx
import { Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph sx={{ mt: 15 }}>
        { }
        <Typography>Contact Us</Typography>
        <Typography>ADRESSES & CONTACT NUMBERS OF KPN BUREAU OFFICES</Typography>
        

        Skardu KPN Office, Qatal-gah Market, Yadgar Chowk, Skardu.
        05815-454099 05815-454099
        Gilgit KPN Office, Shaheed-e-Millat Road, Gilgit
        05811-453446 05811-453446 3.
        Ghizer KPN Office, Ghizer 05814-450375 05814-450375
        Ghanche KPN Office, Main Bazar Khaplu, Faiz Bukhsh Road, Distt: Ghanche
        05816-450328 05816-450328
        Chillas KPN Office, Sartaj Khan Newspaper Agency, Saddar Bazar Chilas, Distt. Diamer
        05812-450870 05812-450621 6. Karachi
        Islamabad (Head Office) KPN House, Service Road, Sohan, Expressway, Islamabad.
        051-2612181-86 Fax: 051-2612185
        { }
      </Typography>
    </Container>
  );
};

export default AboutUs;
