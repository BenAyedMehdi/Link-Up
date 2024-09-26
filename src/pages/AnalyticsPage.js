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
// ----------------------------------------------------------------------

export default function AnalyticsPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Statistics </title>
      </Helmet>

      <Container maxWidth="xl">

        <Grid container spacing={3}>
          
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
              chartData={
                [
                { label: veggies[0].title, value: 400 },
                { label: veggies[1].title, value: 430 },
                { label: veggies[2].title, value: 448 },
                { label: veggies[3].title, value: 470 },
                { label: veggies[4].title, value: 540 },
                { label: veggies[5].title, value: 580 },
              ]
            }
            />
          </Grid>


         
          
         
        </Grid>
      </Container>
    </>
  );
}
