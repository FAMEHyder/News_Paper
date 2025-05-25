// Navbar.jsx
import { AppBar, Toolbar, Box, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DMT from '../Image/DMT.png';
import { Home } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { YouTube } from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };


  return (
    <>
      <AppBar sx={{ backgroundColor: 'white', height: '30vh', }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '30vh', width: '100%', }}>

          {/* Company Logo */}

          <Box
            onClick={() => handleClick('/')}
            component={'img'}
            src={DMT}

            sx={{
              cursor: 'pointer',
              backgroundSize: 'cover 40%',
              height: '23vh',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              backgroundPosition: 'cover',
              borderBottom: '4px solid black',
            }}
          />

          <Box
            sx={{
              height: '10vh',
              width: '100%',
              bgcolor: 'black',
              display: 'flex',
            }}
          >
            <Box flexGrow={1}>
              <Button color='white' sx={{ mr: 3, '&:hover': { bgcolor: 'red', transition: 'ease-in-out scale(.9)', } }}>صفحہ اول</Button>
              <Button color='white' sx={{ borderInlineStart: '2px solid silver', mr: 3, '&:hover': { bgcolor: 'red', transition: 'ease-in-out scale(.9)', } }}>صفحات</Button>
              <Button color='white' sx={{ borderInlineStart: '2px solid silver', mr: 3, '&:hover': { bgcolor: 'red', transition: 'ease-in-out scale(.9)', } }}>گزشتہ شمارے</Button>
            </Box>

            <Box>
              <Link href="https://www.youtube.com" target="_blank" color="inherit">
                <YouTube sx={{ fontSize: 30, '&:hover': { color: 'red' } }} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" color="inherit">
                <WhatsAppIcon sx={{ fontSize: 30, '&:hover': { color: 'green' } }} />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" color="inherit">
                <TwitterIcon sx={{ fontSize: 30, '&:hover': { color: '#1da1f2' } }} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" color="inherit">
                <InstagramIcon sx={{ fontSize: 30, '&:hover': { color: '#e1306c' } }} />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" color="inherit">
                <FacebookIcon sx={{ fontSize: 30, '&:hover': { color: 'blue' } }} />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
