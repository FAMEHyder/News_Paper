// import { Box, Card, Container, CardMedia, CardContent, Grid } from '@mui/material';
// import { useState, useEffect } from 'react';
// import Front from '../Image/A.png';
// import second from '../Image/B.png';
// import third from '../Image/C.png';
// import four from '../Image/D.png';



// const Home = () => {
//   const [akharparo,setakhbarparo]=useState('first');

// const imageobject = {

//   first:{
//     image:Front
//   },
//   second:{
//     image:second 
//   },
//   third:{
//     image:third 
//   },
//   four:{
//     image:four
//   }

// }

// const handleYeParo =(label)=>{
// setakhbarparo(label)
// }

//   // 
//   return (
//     <Grid
//       sx={{
//         height: '435vh',

//       }}>
//       {/* this is the main box  */}
//       <Box
//         sx={{
//           mt:21,
//         }}
//       >

//         {/* the box from where the news paper is being read  */}
//         <Box
//           component={'img'}
//           src={imageobject[akharparo]?.image}
//           sx={{
//             width:'210vh',
//             border: '1px solid black',
//             mt:2,
//             ml:2,
//             '&:hover':{
              
//             }
//           }}
//         />

//         {/* the sub parts of the news paper  */}
//         <Box
//           sx={{
//             height: '30vh',
//             widht: '10vh',
//             mt: 1,
//             display: 'flex',
//             justifyContent: 'space-around',
//           }}
//         >

//           {/* The Sub image one */}
//           <Box
//             component={'img'}
//             src={second}
//             onClick={() => handleYeParo('second')}
//             sx={{
//               height: '30vh',
//               widht: '40vh',
//               mt: 2,
//               border: '1px solid black'
//             }}
//           />

//           {/* The Sub image two  */}
//           <Box
//             component={'img'}
//             src={third}
//             onClick={() => handleYeParo('third')}
//             sx={{
//               height: '30vh',
//               widht: '40vh',
//               mt: 2,
//               border: '1px solid black'

//             }}
//           />

//           {/* The Sub Image three  */}
//           <Box
//             component={'img'}
//             src={four}
//             onClick={() => handleYeParo('four')}
//             sx={{
//               height: '30vh',
//               widht: '40vh',
//               mt: 2,
//               border: '1px solid black'

//             }}
//           />
//           {/* Fourth image  */}
//           <Box
//             component={'img'}
//             src={Front}
//             onClick={() => handleYeParo('first')}
//             sx={{
//               height: '30vh',
//               widht: '40vh',
//               mt: 2,
//               border: '1px solid black'

//             }}
//           />


//         </Box>
//       </Box>

//     </Grid >
//   );
// };

// export default Home;









import { Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:8000/product/');
        const imageList = res.data.result?.[0]?.images || [];

        if (Array.isArray(imageList) && imageList.length > 0) {
          const fullURLs = imageList.map((img) =>
            `http://localhost:8000/${img.replace(/\\/g, '/')}`
          );

          setImages(fullURLs);
          setActiveImage(fullURLs[0]); // Set first image as main
        }
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (img) => {
    setActiveImage(img);
  };

  return (
    <Grid sx={{ height: '435vh' }}>
      <Box sx={{ mt: 21 }}>
        {/* Main image display */}
        {activeImage && (
          <Box
            component="img"
            src={activeImage}
            sx={{
              width: '210vh',
              border: '1px solid black',
              mt: 2,
              ml: 2,
            }}
          />
        )}

        {/* Thumbnail images */}
        <Box
          sx={{
            height: '30vh',
            mt: 1,
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              onClick={() => handleImageClick(img)}
              sx={{
                height: '30vh',
                width: '40vh',
                mt: 2,
                border: activeImage === img ? '2px solid blue' : '1px solid black',
                cursor: 'pointer',
                transition: '0.2s',
              }}
            />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
