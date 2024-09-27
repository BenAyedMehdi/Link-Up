import React, { useState } from 'react';
import { FormHelperText, FormControl, InputLabel, Input, Button } from '@mui/material';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // If there's an error, set the error state to true
    setError(true);
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-describedby="email-helper-text"
      />
      {error && (
        <FormHelperText
          id="email-helper-text"
          sx={(theme) => ({
            color: 'error.main',
            ...theme.applyDarkStyles({
              color: 'error.400',
            }),
          })}
        >
          Oops! Something went wrong, please try again later.
        </FormHelperText>
      )}
      <Button type="submit" variant="contained" color="primary">
        Subscribe
      </Button>
    </FormControl>
  );
};

export default EmailSubscribe;