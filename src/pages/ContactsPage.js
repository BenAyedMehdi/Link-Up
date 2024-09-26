import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Avatar, Button, Typography, Container, Box, Grid } from '@mui/material';
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
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ContactsPage() {
  const isDesktop = useResponsive('up', 'lg');
  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>

      {isDesktop ? <HomeNav /> : <Logo />}

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                We are Menja
              </Typography>

              <Typography marginBottom={10} sx={{ color: 'text.secondary' }}>
                We like to think of ourselves as a reservoir engineering company. Our experience as reservoir engineers
                lets us appreciate the challenges that come with the job. We know the value of information when it comes
                to determining the potential of a hydrocarbon reservoir, and we know that whether we’re dealing with a
                wildcat exploration well or a producing reservoir, reservoir engineers thrive on precise data.
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
                src="/assets/illustrations/ourteam.jpeg"
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
                src="/assets/illustrations/maninfarm.jpg"
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
                Our mission is to give you full control over your food. We are here to help you growing your own fruits
                and vegetables. Now you can choose to decide, plant, monitor and eat the products you grow.
              </Typography>

              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Idrak
              </Typography>

              <Typography marginBottom={5} sx={{ color: 'text.secondary' }}>
                Sustaiability student
              </Typography>
              <Avatar src="/assets/illustrations/idrak.jpg" alt="photoURL" sx={{ width: 200, height: 200 }} />
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Husam
              </Typography>

              <Typography marginBottom={5} sx={{ color: 'text.secondary' }}>
                System engineer
              </Typography>
              <Avatar src="/assets/illustrations/husam.jfif" alt="photoURL" sx={{ width: 200, height: 200 }} />
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Aladdine
              </Typography>

              <Typography marginBottom={5} sx={{ color: 'text.secondary' }}>
                Project manager
              </Typography>
              <Avatar src="/assets/illustrations/aladdine.jfif" alt="photoURL" sx={{ width: 200, height: 200 }} />
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Mehdi
              </Typography>

              <Typography marginBottom={5} sx={{ color: 'text.secondary' }}>
                Software developer
              </Typography>
              <Avatar src="/assets/illustrations/mehdi.jpg" alt="photoURL" sx={{ width: 200, height: 200 }} />
            </StyledContent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
