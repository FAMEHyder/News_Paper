import { Box, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createTheme } from '@mui/material/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
import { useActionData, useNavigate } from 'react-router-dom';

const theme = createTheme({
  direction: 'rtl', // important for Urdu
  typography: {
    fontFamily: `'Noto Nastaliq Urdu', 'JameelNoori', 'serif'`,
  },
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export { theme, jss };

const Footer = () => {

  const navigate = useNavigate('');


  const handleclick = (path)=>{
    navigate(path)

  }
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        marginTop: '10px',
        justifyContent:'space-between',
        
      }}
    >
      <Grid container spacing={4} >
        {/* Contact Us Section */}
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right' }}>
            ایڈیشنز
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/islamabad')}>
            اسلام آباد/راولپنڈی
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/islamabad')}>
            کراچی
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/islamabad')}>
            گلگت بلتستان
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/islamabad')}>
            لاہور
          </Typography>

          <Typography variant="body1" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/islamabad')}>
            مظفر آباد
          </Typography>


        </Grid>

        {/* About Us Section */}
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right' }}>
            ہمارا نیٹ ورک
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/privacy')}>
            پرائیویسی پالیسی
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/terms')}>
            قوائد و ضوابط
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/about')}>
            ہمارے بارے میں
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right',cursor:'pointer' ,':hover':{color:'green'} }} onClick={()=>handleclick('/contact')}>
            ہم سے رابطہ
          </Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right' }}>
            ہم سے رابطہ کے ذرائع
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
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Noto Nastaliq Urdu', textAlign: 'right' }}>
            اہم صفحات
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2">© 2025 news paper. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
