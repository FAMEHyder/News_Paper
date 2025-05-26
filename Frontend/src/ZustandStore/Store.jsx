import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import useImageStore from '../store/useImageStore';
import { Typography } from '@mui/material';

const Store = () => {
  const location = useLocation();
  const selectedDate = location.state?.selectedDate;

  const setImages = useImageStore((state) => state.setImages);

  useEffect(() => {
    if (!selectedDate) return;

    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/product/');
        const products = res.data.result; // assuming product array

        // Find product with matching date
        const matchedProduct = products.find((product) => {
          // Adjust this depending on your API's date field
          // Assuming product.date is ISO string like '2025-05-26'
          return product.date === selectedDate;
        });

        if (matchedProduct) {
          setImages(matchedProduct.images || []);
          console.log('Matched images stored in Zustand:', matchedProduct.images);
        } else {
          setImages([]); // clear images if no match
          console.log('No product matches selected date');
        }
      } catch (err) {
        console.error('API fetch error:', err);
        setImages([]);
      }
    };

    fetchProducts();
  }, [selectedDate, setImages]);

  return (
    <div>
      <Typography variant="h4" sx={{ mt: 10 }}>
        منتخب شدہ تاریخ: {selectedDate || 'کوئی تاریخ منتخب نہیں ہوئی'}
      </Typography>
      {/* You can render images here if you want */}
    </div>
  );
};

export default Store;
