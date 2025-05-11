// Navbar.jsx
import { AppBar, Toolbar, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cl from '../Image/CompanyLogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };


  return (
    <>
      <AppBar sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ justifyContent: 'center',  }}>
          {/* Company Logo */}
          <Box
            onClick={() => handleClick('/')}
            sx={{
              paddingX: { xs: 2, sm: 4, md: 8 },
              cursor: 'pointer',
              backgroundImage: `url(${Cl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              height: 100,
              width: '70px',
              marginRight: 10,
              transformOrigin: 'left',
            }}
          />

         
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
