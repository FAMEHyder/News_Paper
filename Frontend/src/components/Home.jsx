import { Box, Container, } from '@mui/material';
import { useState, useEffect } from 'react';
import bg from '../Image/bg.png';


const Home = () => {


  // 
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',

        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '120vh', sm: '150vh', md: '200vh' }, // Responsive height
        backgroundImage: `url(${bg})`, // Dynamically set the background image
        backgroundSize: 'cover'
      }}
    >
      {/* the first main box of the container  */}
      <Box>
        {/* inner first box */}
        <Box>
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
