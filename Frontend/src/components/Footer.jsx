import { Box, Grid, Typography,  Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '40px 20px',
        marginTop: '10px',
      }}
    >
      <Grid container spacing={4}>
        {/* Contact Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            <EmailIcon sx={{ mr: 1 }} />
            info@newspaper.com
          </Typography>
          <Typography variant="body1">
            <PhoneIcon sx={{ mr: 1 }} />
            +92 123 4567890
          </Typography>
          
        </Grid>

        {/* About Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae rem itaque odio dignissimos mollitia, nulla voluptates nostrum tenetur distinctio? Unde odit praesentium alias hic modi autem natus commodi ducimus amet!
          </Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact with Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="https://www.facebook.com" target="_blank" color="inherit">
              <FacebookIcon sx={{ fontSize: 40, '&:hover': { color: '#3b5998' } }} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" color="inherit">
              <TwitterIcon sx={{ fontSize: 40, '&:hover': { color: '#1da1f2' } }} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" color="inherit">
              <InstagramIcon sx={{ fontSize: 40, '&:hover': { color: '#e1306c' } }} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2">© 2025 news paper. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
