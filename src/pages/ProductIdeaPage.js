import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardMedia,
  InputAdornment,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { faker } from '@faker-js/faker';
import Iconify from '../components/iconify';
import Logo from '../components/logo/Logo';
import { AppOrderTimeline } from '../sections/@dashboard/app';
import HomeNav from '../components/nav-home';
import useResponsive from '../hooks/useResponsive';
import { ProductList } from '../sections/@dashboard/products';
import pots from '../_mock/pots';
import AppFooter from '../components/footer';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  marginBottom: '0px',
  marginTop: '0px',
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ProductIdeaPage() {
  const isDesktop = useResponsive('up', 'lg');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobTypeFilter(event.target.value);
  };

  const handleSpecialtyChange = (event) => {
    setSpecialtyFilter(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const jobs = [
    { title: 'Job1', location: 'New York', details: 'Details1', image: 'https://source.unsplash.com/random' },
    { title: 'Job2', location: 'San Francisco', details: 'Details2', image: 'https://source.unsplash.com/random' },
    { title: 'Job3', location: 'Los Angeles', details: 'Details3', image: 'https://source.unsplash.com/random' },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter ? job.location === locationFilter : true) &&
      (jobTypeFilter ? job.type === jobTypeFilter : true) &&
      (specialtyFilter ? job.specialty === specialtyFilter : true)
  );

  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>

      {isDesktop ? <HomeNav /> : <Logo />}
      <Container maxWidth="xl">
        <Card sx={{ margin: 3 }}>
          <CardHeader
            title="Find Your Perfect Medical Job"
            action={
              <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                New Open Position
              </Button>
            }
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Search Jobs"
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    endAdornment: searchTerm &&(
                      <InputAdornment position="end">
                        <IconButton onClick={handleClearSearch}>
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Location</InputLabel>
                  <Select value={locationFilter} onChange={handleLocationChange} label="Location">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="New York">New York</MenuItem>
                    <MenuItem value="San Francisco">San Francisco</MenuItem>
                    <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Job Type</InputLabel>
                  <Select value={jobTypeFilter} onChange={handleJobTypeChange} label="Job Type">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Full-Time">Full-Time</MenuItem>
                    <MenuItem value="Part-Time">Part-Time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Specialty</InputLabel>
                  <Select value={specialtyFilter} onChange={handleSpecialtyChange} label="Specialty">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Cardiology">Cardiology</MenuItem>
                    <MenuItem value="Neurology">Neurology</MenuItem>
                    <MenuItem value="Pediatrics">Pediatrics</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button variant="contained" fullWidth size="large">
                  Search
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          {filteredJobs.map((job, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia component="img" height="140" image={job.image} alt={job.title} />
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.location}
                  </Typography>
                  <Typography variant="body2">{job.details}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <AppFooter />
    </>
  );
}
