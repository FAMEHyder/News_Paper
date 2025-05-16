import { Box, Container, } from '@mui/material';
import { useState, useEffect } from 'react';
import bg from '../Image/bg.png';
import paper from '../Image/paper.png';


const Home = () => {


  // 
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
  flex: 1,
  position: 'relative',
  height: { xs: '120vh', sm: '150vh', md: '200vh' }, // Responsive height
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${bg})`,
    zIndex: -2,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: -1,
  }
}}

    >
      {/* the first main box of the container  */}
      <Box>
        {/* inner first box */}
        <Box
        component={'img'}
        src={paper}
        sx={{

        }}
        >
        </Box>
        {/* inner second box */}
        <Box>
        </Box>
        {/* inner third box */}
        <Box>
        </Box>
      </Box>

    </Container>
  );
};

export default Home;
