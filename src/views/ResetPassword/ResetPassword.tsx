import React from 'react';
import { Box, Button, TextField } from "@mui/material" ;
import AuthLayout from "layouts/authLayout";
 
const ResetPassword = () => {
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const confirmPasswordRef = React.useRef<HTMLInputElement>(null);

    return <AuthLayout title="Reset password">
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
            <Button fullWidth variant="contained">Reset Password</Button> 
            <Button fullWidth variant="text">
                {/* <Box component='a' href='/' className={st.cancelButton}>Cancel</Box> */}
            </Button> 
        </Box>
    </AuthLayout>
};

export default ResetPassword;