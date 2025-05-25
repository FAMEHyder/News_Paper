import { Box, Card, Container, CardMedia, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import Front from '../Image/A.png';
import second from '../Image/B.png';
import third from '../Image/C.png';
import four from '../Image/D.png';

const Home = () => {


  // 
  return (
    <Container
      sx={{
        height: '350vh',

      }}>
      {/* this is the main box  */}
      <Box
        sx={{
          mt:21,
          hieght:'100%',
          width:'100%',
          border:'2px solid red'
        }}
      >

        {/* the box from where the news paper is being read  */}
        <Box
          component={'img'}
          src={Front}
          sx={{
            height: '300vh',
            widht: '100%',
            ml: '78px',
            mt: 2,
            border: '1px solid black',
          }}
        />

        {/* the sub parts of the news paper  */}
        <Box
          sx={{
            height: '30vh',
            widht: '10vh',
            mt: 1,
            display: 'flex',
            justifyContent: 'space-around',
            border:'2px solid black'
          }}
        >

          {/* The Sub image one */}
          <Box
            component={'img'}
            src={second}
            sx={{
              height: '30vh',
              widht: '40vh',
              mt: 2,
              border: '1px solid black'
            }}
          />

          {/* The Sub image two  */}
          <Box
            component={'img'}
            src={third}
            sx={{
              height: '30vh',
              widht: '40vh',
              mt: 2,
              border: '1px solid black'

            }}
          />

          {/* The Sub Image three  */}
          <Box
            component={'img'}
            src={four}
            sx={{
              height: '30vh',
              widht: '40vh',
              mt: 2,
              border: '1px solid black'

            }}
          />
          {/* Fourth image  */}
          <Box
            component={'img'}
            src={Front}
            sx={{
              height: '30vh',
              widht: '40vh',
              mt: 2,
              border: '1px solid black'

            }}
          />


        </Box>
      </Box>

    </Container >
  );
};

export default Home;
