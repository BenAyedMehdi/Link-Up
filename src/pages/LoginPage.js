import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import HomeNav from '../components/nav-home';
// sections
import { LoginForm } from '../sections/auth/login';
// api
import { login } from '../api/authApi';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  padding: '20px',
  marginLeft: '25px',
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

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const mdUp = useResponsive('up', 'md');

  const handleLogin = async (loginData) => {
    console.log('Login data received in LoginPage:', loginData);
    setIsLoading(true);
    try {
      const response = await login(loginData);
      console.log('Login successful:', response);
      // Store the token in localStorage or a more secure storage
      localStorage.setItem('token', response.token);
      // Redirect to dashboard
      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title> Login - Link Up </title>
      </Helmet>

      <HomeNav />
      <StyledRoot>
        
        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in 
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link href='register' variant="subtitle2">Get started</Link>
            </Typography>
            
            <LoginForm onLogin={handleLogin} isLoading={isLoading} />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
