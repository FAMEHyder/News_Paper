import { Box, Card, Container, CardMedia, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import Front from '../Image/A.jpg';
import second from '../Image/B.jpg';
import third from '../Image/C.jpg';
import four from '../Image/D.jpg';

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
          src={Front}
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
            mt: 2,
            border: '2px solid red',
            display: 'flex',


          }}
        >

          {/* The Sub image one */}
          <Box
            sx={{
              height: '30vh',
              widht: '30vh',
              mt: 2,
              border: '2px solid blue'

            }}
          />
          {/* The Sub image two  */}
          <Box
            sx={{
              height: '30vh',
              widht: '30vh',
              mt: 2,
              border: '2px solid black'

            }}
          />
          {/* The Sub Image three  */}
          <Box
            sx={{
              height: '30vh',
              widht: '30vh',
              mt: 2,
              border: '2px solid green'

            }}
          />
         

        </Box>


      </Box>

    </Container >
  );
};

export default Home;
