import React from 'react';
import {ThemeProvider} from '@mui/material/styles'
// import {signIn} from 'api';
import { darkTheme, lightTheme } from 'theme'; 
import useDarkTheme from 'hooks/useDarkTheme';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'Routes';
 
function App() {
  const {isDarkTheme} = useDarkTheme(); 
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </ThemeProvider>  
  ); 
}

export default App;
 