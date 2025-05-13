// AboutUs.jsx
import { Typography, Container } from '@mui/material';

const AboutUs = () => {
    return (
        <Container sx={{ padding: '2rem' }}>
            
            <Typography variant="body1" paragraph sx={{ mt: 15 }}>
                { }
                <Typography fontWeight={800}>Terms And Condition</Typography>
                <Typography fontWeight={600}>About the terms</Typography>
                
                By visiting this site you consent to be bound by these terms, which might produce results quickly on your first utilization of the site.

                <Typography>Use of this Site</Typography>
                
                You must use this site just for legal purposes, and in a way that does not encroach the privileges of, restrict or inhibit any other individual’s utilization and delight in this site. Denied conduct includes harassing or causing distress or inconvenience to any person, transmitting revolting or offensive content or disturbing the ordinary stream of discourse inside this site.

                
                <Typography>Contents</Typography>
                You might not duplicate, recreate, republish, dismantle, decompile, figure out, download, post, communicate, transmit, make accessible to general society, or generally utilize the substance of this site in any capacity except from your very own, non-business use.
                { }
            </Typography>
        </Container>
    );
};

export default AboutUs;
