// Navbar.jsx
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DMT from '../Image/DMT.png';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };


  return (
    <>
      <AppBar sx={{ backgroundColor: 'white', height: '30vh' }}>
        <Toolbar sx={{ display: 'flex',justifyContent: 'center',flexDirection:'column', height: '23vh', width: '100%',  }}>

          {/* Company Logo */}

          <Box
            onClick={() => handleClick('/')}
            component={'img'}
            src={DMT}

            sx={{
              cursor: 'pointer',
              backgroundSize: 'cover 40%',
              height: '23vh',
              backgroundRepeat:'no-repeat',
              width: '100%',
              backgroundPosition: 'cover'
            }}
          />

          <Box
            sx={{
              height: '10vh',
              width: '100%',
              border: '2px solid green'

            }}
          >
            <Button>گزشتہ شمارے</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
