import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
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
import Iconify from '../iconify';
import useResponsive from '../../hooks/useResponsive';

// ----------------------------------------------------------------------

export default function SearchFilterApplicants() {
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
      <Container maxWidth="xl">
        <Card sx={{ margin: 3 }}>
          <CardHeader
            title="Find The Right Candidates"
            action={
              <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                Add Applicant Manually
              </Button>
            }
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Search Applicants"
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    endAdornment: searchTerm && (
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
                  <InputLabel>City</InputLabel>
                  <Select value={locationFilter} onChange={handleLocationChange} label="Location">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="New York">Düsseldorf</MenuItem>
                    <MenuItem value="New York">Berlin</MenuItem>
                    <MenuItem value="San Francisco">Munich</MenuItem>
                    <MenuItem value="Los Angeles">Frankfurt</MenuItem>
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
                    <MenuItem value="Cardiology">Nurse</MenuItem>
                    <MenuItem value="Cardiology">Pharmasist</MenuItem>
                    <MenuItem value="Cardiology">Sergent</MenuItem>
                    <MenuItem value="Cardiology">Cardiology</MenuItem>
                    <MenuItem value="Neurology">Neurology</MenuItem>
                    <MenuItem value="Pediatrics">Pediatrics</MenuItem>
                    <MenuItem value="Pediatrics">Administration</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button variant="contained" fullWidth size="large">
                  Find Candidates
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
