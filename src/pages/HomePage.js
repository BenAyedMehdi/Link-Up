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

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  marginBottom:'0px',
  marginTop:'0px',
  minHeight: '80vh',
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
        <title> Home </title>
      </Helmet>

      {isDesktop ? <HomeNav /> : (
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
      <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Plant
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>Buy our product and start planting seeds today</Typography>
              <Box
                component="img"
                src="/assets/illustrations/plantt.png"
                sx={{ height: 260, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Monitor
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Our app will give you updates, statistics and analytics
              </Typography>
              <Box
                component="img"
                src="/assets/illustrations/monitor.png"
                sx={{ height: 260, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Collect
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                When the time comes, enjoy fruits or vegetable you collect
              </Typography>
              <Box
                component="img"
                src="/assets/illustrations/collect.webp"
                sx={{ height: 260, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
            </StyledContent>
          </Grid>
        </Grid>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={8}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Our mission
              </Typography>

              <Typography marginBottom={10} sx={{ color: 'text.secondary' }}>
                To make hydroponics technology for farming vegetables easy and accessible for cities citizens, so we can
                maximize the production, use the spaces efficiently, and make the most needed veggies accessible for the
                citizens and with low costs
              </Typography>

              

              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/illustrations/smartfarming.jpg"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </StyledContent>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/illustrations/manageplants.jpeg"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Manage & Grow your food
              </Typography>

              <Typography marginBottom={10} sx={{ color: 'text.secondary' }}>
                We will use AI *IoT* and mobile apps to let every normal person capable of planting and taking care of
                their plants, by giving them clear and simple instructions on what to do. This system can also be
                automated so the machines can do the work when people are not at home. This system will be connected,
                showing the products, prices, and availabilities of the products on different sites and proximities,
                allowing citizens of compounds to exchange
              </Typography>

              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>
        </Grid>

        
      </Container>
    </>
  );
}
