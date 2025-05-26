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
