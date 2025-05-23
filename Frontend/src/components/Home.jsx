import { Box, Card, Container, CardMedia, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import bg from '../Image/bg.png';
import paper from '../Image/paper.png';


const Home = () => {


  // 
  return (
    <Container
      sx={{
        height: '170vh',

      }}>
      {/* this is the main box  */}
      <Box>
        {/* the box from where the news paper is being read  */}
        <Box></Box>

        {/* the sub parts of the news paper  */}
        <Box></Box>


      </Box>

    </Container >
  );
};

export default Home;
