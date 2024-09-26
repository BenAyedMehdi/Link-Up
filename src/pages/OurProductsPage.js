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

export default function OurProductsPage() {
  const isDesktop = useResponsive('up', 'lg');
  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>

      {isDesktop ? <HomeNav /> : <Logo />}

      <Container maxWidth="xl">
        <Grid marginTop={0} container spacing={3}>

          <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Basic
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>5$ per square meter</Typography>
              <Box
                component="img"
                src="/assets/images/pots/pot_3.jpg"
                sx={{ height: 180, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
            <AppOrderTimeline
              list={[...Array(1)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Sustainable hydroponic pot',
                ][index],
                type: `order${index + 1}`,
              }))}
            />
            </StyledContent>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Connected
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>10$ per square meter</Typography>
              <Box
                component="img"
                src="/assets/images/pots/pot_2.jpg"
                sx={{ height: 180, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
            <AppOrderTimeline
              list={[...Array(2)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Sustainable hydroponic pot',
                  'Monitored by IoT sensors',
                ][index],
                type: `order${index + 1}`,
              }))}
            />
            </StyledContent>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Smart
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>20$ per square meter</Typography>
              <Box
                component="img"
                src="/assets/images/pots/pot_1.jpg"
                sx={{ height: 180, mx: 'auto', my: { xs: 4, sm: 2 } }}
              />
            <AppOrderTimeline
              list={[...Array(3)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Sustainable hydroponic pot',
                  'Monitored by IoT sensors',
                  'Automated by a smart controller',
                ][index],
                type: `order${index + 1}`,
              }))}
            />
            </StyledContent>
          </Grid>

        </Grid>

        
      </Container>
    </>
  );
}
