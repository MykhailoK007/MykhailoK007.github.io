import React from 'react';
import AuthLayout from 'layouts/authLayout';
import { Box, Button, TextField, Typography, Link } from '@mui/material';

const Register = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {

  };
  return (
    <AuthLayout title='Sign Up'>
      <TextField
        type="email"
        size="small"
        label="Login"
        variant="standard"
        inputProps={{ref:emailRef}}
      />
      <TextField
        size="small"
        type="password"
        label="Password"
        variant="standard"
        inputProps={{ref:passwordRef}}
      />
      <TextField
        size="small"
        type='password'
        variant="standard"
        label="Confirm Password"
        inputProps={{ref:confirmPasswordRef}}
      />
      <Box sx={{marginTop:'20px'}}>  
        <Button fullWidth variant="contained" onClick={() => handleSubmit} >Submit</Button> 
        <Typography textAlign='center' marginTop='10px'>Already Signed Up? <Link href='/login'>Sign in</Link></Typography>
      </Box>
    </AuthLayout>
  )
};

export default Register;