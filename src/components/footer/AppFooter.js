import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailSubscribe from './EmailSubscribe';

export default function AppFooter() {
  return (
    <Container component="footer">
      <Box
        sx={{
          py: { xs: 4, sm: 8 },
          display: 'grid',
          gridAutoColumns: '1fr',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 4,
          gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1.75fr', lg: '1fr 1fr' },
          gridTemplateRows: 'auto',
          '& a:not(.MuiIconButton-root)': {
            pt: 0.5,
            pb: 0.5,
            color: 'text.secondary',
            typography: 'body2',
            '&:hover': {
              color: 'primary.main',
              textDecoration: 'underline',
            },
          },
        }}
      >
        <div>
          <Typography variant="body2" gutterBottom sx={{ fontWeight: 'semiBold' }}>
            Stay Connected
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Join our newsletter for the latest job opportunities and healthcare insights.
          </Typography>
          <EmailSubscribe />
        </div>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gridAutoColumns: '1fr',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" sx={{ fontWeight: 'semiBold', mb: 0.5 }}>
              For Professionals
            </Typography>
            <Link to="/job-search">Job Search</Link>
            <Link to="/career-resources">Career Resources</Link>
            <Link to="/profile">Manage Profile</Link>
            <Link to="/salary-info">Salary Information</Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" sx={{ fontWeight: 'semiBold', mb: 0.5 }}>
              For Employers
            </Typography>
            <Link to="/post-job">Post a Job</Link>
            <Link to="/talent-search">Search Candidates</Link>
            <Link to="/employer-resources">Employer Resources</Link>
            <Link to="/pricing">Pricing</Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" sx={{ fontWeight: 'semiBold', mb: 0.5 }}>
              About LinkUp
            </Typography>
            <Link to="/about">About Us</Link>
            <Link to="/mission">Our Mission</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/press">Press</Link>
            <Link to="/contact">Contact Us</Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" sx={{ fontWeight: 'semiBold', mb: 0.5 }}>
              Resources
            </Typography>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/partners">Partners</Link>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          alignItems: 'center',
          justifyContent: { sm: 'space-between' },
          gap: { xs: 2, sm: 1 },
          my: 4,
        }}
      >
        <Typography variant="caption" sx={{ color: 'text.tertiary', fontWeight: 400 }}>
          © {new Date().getFullYear()} LinkUp. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/accessibility">Accessibility</Link>
        </Stack>
        <Stack spacing={1} direction="row" useFlexGap sx={{ flexWrap: 'wrap' }}>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/linkup"
            aria-label="LinkedIn"
            title="LinkedIn"
            size="small"
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/LinkUpMedical"
            aria-label="Facebook"
            title="Facebook"
            size="small"
          >
            <FacebookIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/LinkUpMedical"
            aria-label="Twitter"
            title="Twitter"
            size="small"
          >
            <TwitterIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/linkupmedical"
            aria-label="Instagram"
            title="Instagram"
            size="small"
          >
            <InstagramIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
}