import * as React from 'react';
import { Button, Typography, Container, Box, Grid } from '@mui/material';
import ProductHeroLayout from '../product-hero-layout';

const backgroundImage = '/assets/images/consultation-doctors-white.avif';

export default function HeroSection() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Connecting Medical Professionals Worldwide
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
        Find your dream job or the perfect candidate with LinkUp's innovative recruitment platform.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="open-positions"
        sx={{ minWidth: 200 }}
      >
        Find a Job
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Apply for a job in 3 minutes.
      </Typography>
    </ProductHeroLayout>
  );
}
