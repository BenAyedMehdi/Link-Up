import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// @mui
import { Grid, Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import apiCalls from '../../../api/apiCalls';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await apiCalls.GetAllUsers();
      setUsers(usersFromServer);
      console.log(usersFromServer);
    };
    getUsers();
  }, []);


  const handleClick = () => {
    const tmpUser = users.filter(u=> u.email === email)[0];
    console.log(tmpUser.company)
    setUser(tmpUser);
    localStorage.setItem("user", JSON.stringify(tmpUser));
    
    if(tmpUser){
      if(tmpUser.company === null){
        navigate('/add-company', { replace: true });
      }else{
        navigate('/dashboard', { replace: true });
      }
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={(e) => setEmail(e.target.value)} />

        <TextField
          name="password"
          label="Password (optional)"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
