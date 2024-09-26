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
          Hi, Welcome back to your smart sustainable farm
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Card>
              <CardHeader title="My progress in numbers" />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Weekly Productions (kg)" total={14} icon={'ant-design:android-filled'} />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Plant types produced"
                      total={38}
                      color="info"
                      icon={'ant-design:apple-filled'}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="CO2 Emission saved"
                      total={1723315}
                      color="warning"
                      icon={'ant-design:windows-filled'}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Money saved (in HUF)"
                      total={23000}
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
