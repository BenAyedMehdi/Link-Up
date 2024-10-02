import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import ClearIcon from '@mui/icons-material/Clear';
import { Container, Stack, Typography,TextField, InputAdornment, IconButton } from '@mui/material';
import apiCalls from '../api/apiCalls';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
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
// mock
import PRODUCTS from '../_mock/allProducts';
import veggies from '../_mock/veggies';
import SearchFilterApplicants from '../components/search-applicants';

// ----------------------------------------------------------------------

export default function SearchApplicantsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await apiCalls.GetAllProducts();
      setProducts(productsFromServer);
    };
    getProducts();
  }, []);
  
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
    
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> My products </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Search & Contact Applicants
        </Typography>
        <SearchFilterApplicants />
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <AppNewsUpdate title="Applicants in the system" list={veggies} />
        <ProductCartWidget />
      </Container>
    </>
  );
}
