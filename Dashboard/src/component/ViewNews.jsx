import { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Rating, Skeleton, IconButton } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AlmondCards = () => {
  const [almondProducts, setAlmondProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();
  

  const handleCardClick = (product) => {
    navigate('/productDetails', { state: { product } });
  };



  return (
    <Box sx={{ mt: 12 }}>
      {/* Slider */}
     

      {/* Card Grid */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {(loading ? Array.from(new Array(8)) : almondProducts).map((almond, index) => (
          <Grid item xs={12} sm={6} md={3} key={almond?._id || index}>
            <Card
              onClick={() => !loading && handleCardClick(almond)}
              sx={{
                height: 400,
                cursor: 'pointer',
                boxShadow: 5,
                position: 'relative',
              }}
            >
              {loading ? (
                <Skeleton variant="rectangular" height={290} />
              ) : (
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="290"
                    image={almond.images[0]} // Assuming 'images' is an array
                    alt={almond.name}
                  />
                  <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                    <IconButton onClick={(e) => {
                      e.stopPropagation();
                      handleFavoriteToggle(almond._id);
                    }}>
                      {favorites[almond._id] ? <Favorite color="error" /> : <FavoriteBorder />}
                    </IconButton>
                  </Box>
                </Box>
              )}
              <CardContent>
                {loading ? (
                  <>
                    <Skeleton variant="text" sx={{ fontSize: '1.25rem', width: '80%' }} />
                    <Skeleton variant="text" sx={{ width: '60%' }} />
                  </>
                ) : (
                  <>
                    <Typography gutterBottom variant="h5" component="div">
                      {almond.name}
                    </Typography>
                    <Typography variant="body1" color="blue">
                      Price: ${almond.subCategory.price}
                    </Typography>
                    <Rating
                      name={`rating-${almond._id}`}
                      value={almond.subCategory.rating || 0}
                      readOnly
                      precision={0.1}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AlmondCards;