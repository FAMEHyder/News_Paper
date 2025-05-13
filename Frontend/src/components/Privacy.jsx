// AboutUs.jsx
import { Typography, Container } from '@mui/material';

const AboutUs = () => {
    return (
        <Container sx={{ padding: '2rem' }}>
            
            <Typography variant="body1" paragraph sx={{ mt: 15 }}>
                { }
                <Typography fontWeight={800}>Privacy Policy</Typography>
                <Typography fontWeight={600}>Privacy policy:</Typography>
                
                We do not ask or use your Personal Information for giving and enhancing any Service. By utilizing our Services, you agree to the collection and use of data or information as per this policy

                
                <Typography fontWeight={600}>We do not collect information</Typography>
                We do not collect our users’ information to use our services.

                
                <Typography fontWeight={600}>Advertisment</Typography>
                To the extent commercial ads are on our site, we concentrate on focused advertisement in which we attempt to engage our clients with those promotions which are as indicated by their interests.

                
                <Typography fontWeight={600}>Legal information</Typography>
                You can contact with us on info@dailyk2.com for any querry related to our site.
                { }
            </Typography>
        </Container>
    );
};

export default AboutUs;
