import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import AuthLayout from 'layouts/authLayout';
import FirebaseContext from 'contexts/FirebaseContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TComponentWithAppProps } from 'types';


type TypeFieldsState <T> = {
  isValid: boolean,
  values: Record<keyof T, string>,
  errors: Record<keyof T, string>,
  touched: Record<keyof T, boolean>,
}
type TFields = {email:string,password:string,confirm:string};

const Register = (props: TComponentWithAppProps ) => {

  const navigate = useNavigate();
  const {appProps: {setIsAuthorised}} = props;
  const [fields, setFields] = React.useState<TypeFieldsState<TFields>>({
    isValid: false,
    values: {email: '', password: '', confirm:''},
    touched: {email: false, password: false, confirm:false},
    errors: {email: '', password: '', confirm:''},
  })

 
  const { auth } = React.useContext(FirebaseContext);

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, fields.values.email, fields.values.password).then(() => {
      setIsAuthorised(true);
      navigate('/');
    }).catch(() => setIsAuthorised(false));
  };
  const handleChange: (name: keyof TFields) => React.ChangeEventHandler<HTMLInputElement> = (name) =>  ({target}) => {

    setFields( prev => (
      {...prev,
        values: {...prev.values, [name]: target.value},
        touched: {...prev.touched, [name]: true},
        errors: {...prev.errors}
      })); 
  };

  return (
    <AuthLayout title='Sign Up'>
      <TextField
        type="email"
        size="small"
        name="email"
        label="Login"
        variant="standard"
        value={fields.values?.email}
        onChange={handleChange('email')}
      />
      <TextField
        size="small"
        type="password"
        name="password"
        label="Password"
        variant="standard"
        value={fields.values?.password}
        onChange={handleChange('password')}

      />
      <TextField
        size="small"
        name="confirm"
        type='password'
        variant="standard"
        label="Confirm Password"
        value={fields.values?.confirm}
        onChange={handleChange('confirm')}
      />
      <Box sx={{marginTop:'20px'}}>  
        <Button fullWidth variant="contained" onClick={handleSubmit} >Submit</Button> 
        <Typography textAlign='center' marginTop='10px'>Already Signed Up? <Link href='/login'>Sign in</Link></Typography>
      </Box>
    </AuthLayout>
  )
};

export default Register;