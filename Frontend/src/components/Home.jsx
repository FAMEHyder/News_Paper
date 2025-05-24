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
        height: '350vh',

      }}>
      {/* this is the main box  */}
      <Box>
        {/* the box from where the news paper is being read  */}
        <Box

          componont='img'
          src={Main}
          sx={{
            height: '300vh',
            widht: '100%',
            mt: '35vh',
            border: '2px solid red'

          }}
        />

        {/* the sub parts of the news paper  */}
        <Box
          sx={{
            height: '30vh',
            widht: '100%',
            mt:2,            
            border: '2px solid red',
            display:'flex',
            

          }}
        >
          <Box
          sx={{
            height: '3vh',
            widht: '30vh',
            mt:2,            
            border: '2px solid red'

          }}
          />
          <Box
          sx={{
            height: '3vh',
            widht: '30vh',
            mt:2,            
            border: '2px solid red'

          }}
          />
          <Box
          sx={{
            height: '3vh',
            widht: '30vh',
            mt:2,            
            border: '2px solid red'

          }}
          />
          <Box
          sx={{
            height: '3vh',
            widht: '30vh',
            mt:2,            
            border: '2px solid red'

          }}
          />

        </Box>


      </Box>

    </Container >
  );
};

export default Home;
