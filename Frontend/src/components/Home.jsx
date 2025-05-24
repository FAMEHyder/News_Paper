import { Box, Card, Container, CardMedia, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import Main from '../Image/A.jpg';
import B from '../Image/B.jpg';
import C from '../Image/C.jpg';
import D from '../Image/D.jpg';

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
        <Box
        
        componont='img'
        src={Main}
        
        >


        </Box>

        {/* the sub parts of the news paper  */}
        <Box>


        </Box>


      </Box>

    </Container >
  );
};

export default Home;
