// AboutUs.jsx
import { Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container sx={{ padding: '2rem' }}>
      
      <Typography variant="body1" paragraph sx={{ mt: 15 }}>
        { }
        <Typography fontWeight={800}>Contact Us</Typography>
        <Typography fontWeight={600}>ADRESSES & CONTACT NUMBERS OF KPN BUREAU OFFICES</Typography>
        
        
        Skardu Mashabrum times Office, Hussaini Chowk, Skardu.
        <br />
        05815-6749375 05815-234523
        <br />
        Gilgit Mashabrum times Office, NLI market Road, Gilgit
        <br />
        05811-42323232 05811-43434221
        <br />
        Ghizer Mashabrum times Office, Ghizer 05814-2323232 05814-4523423
        <br />
        Ghanche Mashabrum times Office Main Bazar Khaplu,  Distt: Ghanche
        <br />
        05816-44546432 05816-4502322132
        <br />
        Chillas Mashabrum times Office Saddar Bazar Chilas, Distt. Diamer
        <br />
        05812-450870 05812-450621 
        <br />
        <br />
        Islamabad (Head Office) Mashabrum times Office Islamabad.
        051-2624322331-86 Fax: 051-23232111-2423
        { }
      </Typography>
    </Container>
  );
};

export default AboutUs;
