import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { RegisterForm } from '../sections/auth/register';
import HomeNav from '../components/nav-home';

import { signUp } from '../api/authApi';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  margin: 0,
  padding: 0,
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  marginLeft: '25px',
  padding: '10px',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (userData) => {
    console.log('Registration data received in RegisterPage:', userData);
    setIsLoading(true);
    try {
      const response = await signUp(userData);
      console.log('Registration successful:', response);
      // Redirect to login page or dashboard
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Register - Link Up </title>
      </Helmet>

      <HomeNav />
      <StyledRoot>
        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome
            </Typography>
            <img src="/assets/illustrations/company.avif" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Register Page
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Already have an account? {''}
              <Link href="login" variant="subtitle2">
                Login
              </Link>
            </Typography>

            <RegisterForm onRegister={handleRegister} isLoading={isLoading} />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
