import { useState, useEffect } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Skeleton,
} from '@mui/material';
import axios from 'axios';

const AkhbarCards = () => {
    const [akhbar, setAkhbar] = useState('');
    const [loading, setLoading] = useState(true);

    const url = `http://localhost:8000/${akhbar.images[0].replace(/\\/g, '/')}`;

    console.log('Your newspaper is : ', url)
    useEffect(() => {
        let isMounted = true;

        (async () => {
            try {
                const response = await axios.get('http://localhost:8000/product/');
                const allProducts = response.data?.result ?? [];

                if (isMounted && allProducts.length > 0) {
                    setAkhbar(allProducts[0]); // Show only the first newspaper
                }
            } catch (err) {
                console.error('Error fetching Akhbar ➜', err);
            } finally {
                if (isMounted) setLoading(false);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <Box sx={{ mt: 12 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card
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
                                image={url}
                                alt={'Today Newspaper'}
                            />
                        )}

                        {/* ────────── content / skeleton ───────── */}
                        <CardContent>
                            {loading ? (
                                <>
                                    <Skeleton variant="text" sx={{ fontSize: '1.25rem', width: '80%' }} />
                                    <Skeleton variant="text" sx={{ width: '60%' }} />
                                </>
                            ) : akhbar ? (
                                <>
                                    <Typography gutterBottom variant="h6">
                                        {akhbar.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Category: {akhbar.category ?? 'N/A'}
                                    </Typography>
                                </>
                            ) : (
                                <Typography variant="body2" color="text.secondary">
                                    No Akhbar product found.
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AkhbarCards;
