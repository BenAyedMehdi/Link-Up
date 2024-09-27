import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, Grid } from '@mui/material';
import { faker } from '@faker-js/faker';
import Logo from '../components/logo/Logo';
import { AppOrderTimeline } from '../sections/@dashboard/app';
import HomeNav from '../components/nav-home/HomeNav';
import useResponsive from '../hooks/useResponsive';
import HeroSection from '../components/hero-section';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  minHeight: '40vh',
  margin: 'auto',
  marginBottom: '32px',
  marginTop: '32px',
  padding: '16px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  const isDesktop = useResponsive('up', 'lg');
  return (
    <>
      <Helmet>
        <title> Link Up Home </title>
      </Helmet>

      {isDesktop ? (
        <HomeNav />
      ) : (
        <>
          <Logo />
          <Button color="success" variant="text" href="products">
            Products
          </Button>
          <Button color="success" variant="text" href="pricing">
            Pricing
          </Button>
          <Button color="success" variant="text" href="contact">
            Contact
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            style={{
              backgroundColor: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
            href="dashboard"
          >
            Demo
          </Button>
        </>
      )}

      <Container maxWidth="xl">
      <HeroSection/>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Job Matching Process
              </Typography>

              <Box
                component="img"
                src="/assets/illustrations/work-svgrepo-com.svg"
                sx={{ height: 160, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
              <Typography sx={{ color: 'text.secondary' }}>
                We connect you with the most relevant opportunities.
              </Typography>
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Global Network in Germany
              </Typography>
              <Box
                component="img"
                src="/assets/illustrations/world-svgrepo-com.svg"
                sx={{ height: 160, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />

              <Typography sx={{ color: 'text.secondary' }}>
                Access medical positions in Germany from around the world.
              </Typography>
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Specialized for Healthcare
              </Typography>

              <Box
                component="img"
                src="/assets/illustrations/stethoscope-2-svgrepo-com.svg"
                sx={{ height: 160, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
              <Typography sx={{ color: 'text.secondary' }}>
                Tailored features for medical professionals and institutions.
              </Typography>
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Specialized for Healthcare
              </Typography>

              <Box
                component="img"
                src="/assets/illustrations/stethoscope-2-svgrepo-com.svg"
                sx={{ height: 160, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
              <Typography sx={{ color: 'text.secondary' }}>
                Tailored features for medical professionals and institutions.
              </Typography>
            </StyledContent>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}
