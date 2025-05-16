import { Box, Card, Container, CardMedia, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import bg from '../Image/bg.png';
import paper from '../Image/paper.png';


const Home = () => {


  // 
  return (
    <Container
      sx={{
        height: '150vh'
      }}>
      {/* the first main box of the container  */}
      <Box>
        {/* inner first box */}
        <Card
          sx={{
            mt:20,
            width:'55vh'
          }}

        >
          <CardContent>
          کراچی
          </CardContent>
          <CardMedia
            component={'img'}
            src={paper}
            sx={{
              height:'45vh',
            backgroundSize: 'contained',
              ':hover': {
                boxShadow: '2px 2px 2px 2px black',
                transition: ' all 0.3s ease',
                transform: 'scale(0.99)'
              }
            }}
          />


        </Card>
        {/* inner second box */}
        <Box>
        </Box>
        {/* inner third box */}
        <Box>
        </Box>
      </Box>

    </Container >
  );
};

export default Home;
