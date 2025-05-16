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
      {/* the first main box of the container  */}
      <Box display={'flex'} flexDirection={'column'} > 
        {/* the inner first main box */}
        <Box
        display={'flex'} justifyContent={'space-between'} 
        >

          <Card
            sx={{
              mt: 20,
              width: '55vh',
              ':hover': {
                boxShadow: '1px 1px 1px 1px black',
                transition: ' all 0.3s ease',
                transform: 'scale(0.99)'
              }
            }}

          >
            <CardContent sx={{textAlign:'end'}}>
              اسلام آباد/راولپنڈی
            </CardContent>
            <CardMedia
              component={'img'}
              src={paper}
              sx={{
                height: '50vh',
                backgroundSize: 'contained',

              }}
            />


          </Card>

          <Card
            sx={{
              mt: 20,
              width: '55vh',
              ':hover': {
                boxShadow: '1px 1px 1px 1px black',
                transition: ' all 0.3s ease',
                transform: 'scale(0.99)'
              }
            }}

          >
            <CardContent sx={{textAlign:'end'}}>
              کراچی
            </CardContent>
            <CardMedia
              component={'img'}
              src={paper}
              sx={{
                height: '50vh',
                backgroundSize: 'contained',

              }}
            />


          </Card>

          <Card
            sx={{
              mt: 20,
              width: '55vh',
              ':hover': {
                boxShadow: '1px 1px 1px 1px black',
                transition: ' all 0.3s ease',
                transform: 'scale(0.99)'
              }
            }}

          >
            <CardContent sx={{textAlign:'end'}}>
              گلگت بلتستان
            </CardContent>
            <CardMedia
              component={'img'}
              src={paper}
              sx={{
                height: '50vh',
                backgroundSize: 'contained',

              }}
            />


          </Card>

        </Box>

        {/* the inner second main box */}
        <Box
        display={'flex'}  justifyContent={'space-between'} 
        >
          <Card
            sx={{
              mt: 10,
              width: '55vh',
              ':hover': {
                boxShadow: '1px 1px 1px 1px black',
                transition: ' all 0.3s ease',
                transform: 'scale(0.99)'
              }
            }}

          >
            <CardContent>
              Skardu
            </CardContent>
            <CardMedia
              component={'img'}
              src={paper}
              sx={{
                height: '50vh',
                backgroundSize: 'contained',

              }}
            />


          </Card>

          <Card
            sx={{
              mt: 10,
              width: '55vh',
              ':hover': {
                boxShadow: '1px 1px 1px 1px black',
                transition: ' all 0.3s ease',
                transform: 'scale(0.99)'
              }
            }}

          >
            <CardContent sx={{textAlign:'end'}}>
              لاہورs
            </CardContent>
            <CardMedia
              component={'img'}
              src={paper}
              sx={{
                height: '50vh',
                backgroundSize: 'contained',

              }}
            />


          </Card>

          <Card
            sx={{
              mt: 10,
              width: '55vh',
              ':hover': {
                boxShadow: '1px 1px 1px 1px black',
                transition: ' all 0.3s ease',
                transform: 'scale(0.99)'
              }
            }}

          >
            <CardContent sx={{textAlign:'end'}}>
              مظفر آباد
            </CardContent>
            <CardMedia
              component={'img'}
              src={paper}
              sx={{
                height: '50vh',
                backgroundSize: 'contained',

              }}
            />


          </Card>

        </Box>
      </Box>

    </Container >
  );
};

export default Home;
