import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { Box, Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import apiCalls from '../api/apiCalls';
import Iconify from '../components/iconify';
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
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/companies';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  useEffect(() => {
    const getCompanies = async () => {
      const companiesFromServer = await apiCalls.GetAllCompanies();
      setCompanies(companiesFromServer);
      // console.log('companies', companiesFromServer);
    };
    getCompanies();
  }, []);

  const allCompanies = companies.map((c, index) => {
    const tmp = POSTS[index];
    tmp.title = c.compnayName;
    return tmp;
  });

  return (
    <>
      <Helmet>
        <title> Community</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Community
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              component="img"
              src="/assets/illustrations/community.png"
              sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Content"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Recommendations and tips',
                  'Frequently asked questions',
                  'Manual and tutorials',
                  'Articals and researchs',
                  'Share and learn from others',
                ][index],
                type: `order${index + 1}`,
              }))}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
              <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
                <Box
                  component="img"
                  src="/assets/illustrations/illustration_avatar.png"
                  sx={{ width: 100, position: 'absolute', top: -50 }}
                />

                <Box sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6">
                    Join the Menja community
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Were you learn, share and inspire
                  </Typography>
                </Box>

                <Button target="_blank" variant="contained">
                  Join community
                </Button>
              </Stack>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
