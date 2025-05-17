// AlmondCards.jsx
import { useState, useEffect } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Rating,
    Skeleton,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AlmondCards = () => {
    const [NewsPaper, setNewsPaper] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    /* ─────────────────────────────
       Fetch once on component mount
       ───────────────────────────── */
    useEffect(() => {
        let isMounted = true;

        (async () => {
            try {
                const response = await axios.get('http://localhost:8000/product/');
                const allProducts = response.data?.result ?? [];
                console.log('your response data is :', response.data)


                console.log('your paper is ', allProducts)
                if (isMounted) setNewsPaper(allProducts);
            } catch (err) {
                console.error('Error fetching products ➜', err);
            } finally {
                if (isMounted) setLoading(false);
            }
        })();

        // cleanup to avoid state-update-on-unmounted component
        return () => {
            isMounted = false;
        };
    }, []);



    return (
        <Box sx={{ mt: 12 }}>
            <Grid container spacing={2}>
                {(loading ? Array.from({ length: 8 }) : NewsPaper).map(
                    (almond, index) => (
                        <Grid item xs={12} sm={6} md={3} key={almond?._id || index}>
                            <Card
                                onClick={() => !loading && handleCardClick(almond)}
                                sx={{
                                    height: 400,
                                    cursor: loading ? 'default' : 'pointer',
                                    boxShadow: 5,
                                    position: 'relative',
                                }}
                            >
                                {/* ──────── image / skeleton ──────── */}
                                {loading ? (
                                    <Skeleton variant="rectangular" height={290} />
                                ) : (
                                    <CardMedia
                                        component="img"
                                        height="290"
                                        image={
                                            almond.images?.[0]
                                                ? `http://localhost:8000/${almond.images[0].replace(
                                                    /\\/g,
                                                    '/'
                                                )}`
                                                : '/placeholder.jpg'
                                        }
                                        alt={almond.name}
                                    />
                                )}
                            </Card>
                        </Grid>
                    )
                )}

                {/* ───────────── empty state ───────────── */}
                {!loading && NewsPaper.length === 0 && (
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                            No almond products available.
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default AlmondCards;
