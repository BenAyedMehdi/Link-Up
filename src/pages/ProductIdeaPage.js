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
import OpenPositionsList from '../components/open-positions-list';

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
      <OpenPositionsList />
      <AppFooter />
    </>
  );
}
