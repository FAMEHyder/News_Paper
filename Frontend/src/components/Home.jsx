import { Box, Card, Container, CardMedia, CardContent, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import Front from '../Image/A.png';
import second from '../Image/B.png';
import third from '../Image/C.png';
import four from '../Image/D.png';



const Home = () => {
  const [akharparo,setakhbarparo]=useState('first');

const imageobject = {

  first:{
    image:Front
  },
  second:{
    image:second 
  },
  third:{
    image:third 
  },
  four:{
    image:four
  }

}

const handleYeParo =(label)=>{
setakhbarparo(label)
}

  // 
  return (
    <Grid
      sx={{
        height: '435vh',

      }}>
      {/* this is the main box  */}
      <Box
        sx={{
          mt:21,
        }}
      >

        {/* the box from where the news paper is being read  */}
        <Box
          component={'img'}
          src={imageobject[akharparo]?.image}
          sx={{
            width:'210vh',
            border: '1px solid black',
            mt:2,
            ml:2,
            '&:hover':{
              
            }
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
          }}
        >

          {/* The Sub image one */}
          <Box
            component={'img'}
            src={second}
            onClick={() => handleYeParo('second')}
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
            onClick={() => handleYeParo('third')}
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
            onClick={() => handleYeParo('four')}
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
            onClick={() => handleYeParo('first')}
            sx={{
              height: '30vh',
              widht: '40vh',
              mt: 2,
              border: '1px solid black'

            }}
          />


        </Box>
      </Box>

    </Grid >
  );
};

export default Home;
