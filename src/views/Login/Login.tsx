import React from 'react';
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import AuthLayout from 'layouts/authLayout';

const Login = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {};
  return (
    <AuthLayout title='Sign In'>
      <TextField
        type="email"
        size="small"
        label="Login"
        variant="standard"
        inputProps={{ref:emailRef}}
      />
      <Box>
        <TextField
          fullWidth
          size="small"
          type="password"
          label="Password"
          variant="standard"
          inputProps={{ref:passwordRef}}
          />
        <Typography textAlign='end' fontSize='12px'>
          <Link href='/reset-password'  sx={{color: 'gray'}}>Forgot password?</Link>
        </Typography>
      </Box>
      <Box sx={{marginTop:'20px'}}>  
        <Button fullWidth variant="contained" onClick={() => handleSubmit}>Submit</Button> 
        <Typography textAlign='center' marginTop='10px'>Haven't  Signed in yet? <Link href='/register'>Sign in</Link></Typography>
      </Box>
    </AuthLayout>
  )
};

export default Login;