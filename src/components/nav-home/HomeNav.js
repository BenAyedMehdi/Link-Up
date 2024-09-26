import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Logo from '../logo';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function HomeNav() {
  return (
    <AppBar color="inherit" position="relative" sx={{ height: '80px' }}>
      <Toolbar sx={{px: 2.5, py: 3, minHeight: '80px' }}>
        <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
          <Logo dest="/"/>
        </Box>
        {/* <Typography variant="h3" sx={{ px: 2}}>
          Menja
        </Typography> */}

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={2}>
          <Button color="success" variant="text" href="products">
            Jobs
          </Button>
          <Button color="success" variant="text" href="pricing">
            Services
          </Button>
          <Button color="success" variant="text" href="contact">
            Contact
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            style={{
              backgroundColor: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
            href="dashboard"
          >
            Dashboard
          </Button>

        </Stack>
      </Toolbar>
    </AppBar>
  );
}
