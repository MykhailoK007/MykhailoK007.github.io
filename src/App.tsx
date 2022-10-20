import React from 'react';
import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles'
import './App.css';
// import {signIn} from 'api';
import { darkTheme, lightTheme } from 'theme'; 

function App() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleSubmit = () => { 
    if(!emailRef?.current?.value || !passwordRef?.current?.value)return;
    console.log(emailRef?.current?.value, passwordRef?.current?.value);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
    <div>
      <Button variant='outlined' color='secondary' onClick={() => {setDarkMode(prev => !prev)}}>{ `Set ${darkMode ? 'light': 'dark'} mode`}</Button>
      <Card sx={{width:"80%", margin: '0 auto', marginTop: '200px', padding:'0 50px', maxWidth:'500px'}}>
        <CardHeader title='Sign in' titleTypographyProps={{textAlign:'center',}} />
        <CardContent sx={{display:'flex', flexDirection:'column',maxWidth:'400px',  margin: '0 auto'}}>
          <TextField inputProps={{ref:emailRef}} label="Login" variant="standard" type='email'/>
          <TextField  inputProps={{ref:passwordRef}} label="Password" variant="standard" type='password'/> 
          <Box sx={{marginTop:'20px'}}>  
            <Button sx={{width:'100px'}} variant="outlined" onClick={handleSubmit} >Submit</Button> 
          </Box>
        </CardContent>
      </Card> 
    </div> 
    </ThemeProvider>
 
  );
}

export default App;
