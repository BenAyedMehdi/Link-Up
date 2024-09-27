import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Box, Stack, Button, Grid, Container, Typography } from '@mui/material';
import apiCalls from '../api/apiCalls';
import AddProductDialog from '../components/dialog/AddProductDialog';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { ProductList } from '../sections/@dashboard/products';

import pots from '../_mock/pots';
import veggies from '../_mock/veggies';

const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function MilestonesPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [milestones, setMilestones] = useState([]);
  const [products, setProducts] = useState([]);

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  useEffect(() => {
    /*
    if (user === '') {
      navigate('/', { replace: true });
    }
    const getMilestones = async () => {
      const milestonesFromServer = await apiCalls.GetCompanyMilestones(user.company.companyId);
      setMilestones(milestonesFromServer);
      console.log('milestones', milestonesFromServer);
    };
    getMilestones();
    
    const getProducts = async () => {
      const productsFromServer = await apiCalls.GetCompanyProducts(user.company.companyId);
      setProducts(productsFromServer);
      console.log('Products', productsFromServer);
    };
    getProducts();
    */
  }, []);

  const PRODUCTS = products.map((p, index) => {
    const setIndex = index + 1;

    return {
      id: p.productId,
      cover: `/assets/images/covers/cover_${setIndex + 20}.jpg`,
      name: p.productName,
      company: user.company.companyName,
      price: p.price,
      priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
      colors:
        (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
        (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
        (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
        (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
        (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
        (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
        PRODUCT_COLOR,
      status: sample(['sale', 'new', '', '']),
    };
  });

  return (
    <>
      <Helmet>
        <title> Dashboard</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back to Link Up Management Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Card>
              <CardHeader title="My progress in numbers" />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Active verified users" total={841} icon={'ant-design:android-filled'} />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Open positions"
                      total={139}
                      color="info"
                      icon={'ant-design:apple-filled'}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Application submitted"
                      total={1284}
                      color="warning"
                      icon={'ant-design:windows-filled'}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Hospital Client Partners"
                      total={16}
                      color="error"
                      icon={'ant-design:bug-filled'}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Card>
              <CardHeader
                title="My pots"
                action={
                  <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                    Buy a New Pot
                  </Button>
                }
              />
              <CardContent>
                <ProductList products={pots.filter((p, index) => index < 3)} />
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={8} lg={4}>
            <AppTrafficBySite
              title="Expected Sites Traffic by 2023"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Future market needs"
              chartLabels={veggies.map((v) => v.title)}
              chartData={[
                { name: '2022', data: [80, 50, 30, 40, 100, 20] },
                { name: '2023', data: [20, 30, 40, 80, 20, 80] },
                { name: '2024', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="The past, the present, the future"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2017',
                '02/01/2018',
                '03/01/2019',
                '04/01/2020',
                '05/01/2021',
                '06/01/2022',
                '07/01/2023',
                '08/01/2024',
                '09/01/2025',
                '10/01/2026',
                '11/01/2027',
              ]}
              chartData={[
                {
                  name: 'Production',
                  type: 'column',
                  fill: 'solid',
                  data: [0, 0, 0, 0, 0, 22, 37, 21, 32, 30, 70],
                },
                {
                  name: 'CO2 emission',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 20, 11, 17, 8],
                },
                {
                  name: 'Market size',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 48, 80],
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current pots situation"
              chartData={[
                { label: 'Available', value: 4344 },
                { label: 'To harvest', value: 5435 },
                { label: 'Testing', value: 1443 },
                { label: 'Growing', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Veggies market needs"
              subheader="(+43%) than last year"
              chartData={[
                { label: veggies[0].title, value: 400 },
                { label: veggies[1].title, value: 430 },
                { label: veggies[2].title, value: 448 },
                { label: veggies[3].title, value: 470 },
                { label: veggies[4].title, value: 540 },
                { label: veggies[5].title, value: 580 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Progress"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Buy one or more pots',
                  'Download the app',
                  'Connect to your pots',
                  'Plant crops',
                  'Monitor progress',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
          

          
        </Grid>
      </Container>
    </>
  );
}
