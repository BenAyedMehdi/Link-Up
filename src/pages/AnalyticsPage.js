import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
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

import veggies from '../_mock/veggies';
import OpenPositionsList from '../components/open-positions-list';
// ----------------------------------------------------------------------

export default function AnalyticsPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Statistics </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Create & Manage Open Positions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <OpenPositionsList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
