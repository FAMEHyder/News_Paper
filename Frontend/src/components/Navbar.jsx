// Navbar.jsx
import { AppBar, Toolbar, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DMT from '../Image/DMT.png';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };


  return (
    <>
      <AppBar sx={{ backgroundColor: 'white',height:'23vh' }}>
        <Toolbar sx={{ justifyContent: 'center',height:'23vh',width:'100%',display:'flex' }}>

          {/* Company Logo */}

          <Box
            onClick={() => handleClick('/')}
            component={'img'}
            src={DMT}

            sx={{
              cursor: 'pointer',
              backgroundSize: 'cover 40%',
              height: '23vh',
              // backgroundRepeat:'no-repeat',
              width: '100%',
              backgroundPosition:'cover'
            }}
          />
<Box
sx={{
  height:'40vh',
  width:'100%',
  border:'2px solid red'

}}
>

</Box>
         
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
