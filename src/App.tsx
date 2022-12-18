import React from 'react';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import {ThemeProvider} from '@mui/material/styles'
import { darkTheme, lightTheme } from 'theme'; 
import { useNavigate } from 'react-router-dom';
import useDarkTheme from 'hooks/useDarkTheme';
import app from 'firebase.config' ;
import Routes from 'Routes';
import FirebaseContext from 'contexts/FirebaseContext';
 
function App() {
  const auth = getAuth(app);
  const {isDarkTheme} = useDarkTheme(); 
  const [isAuthorised, setIsAuthorised] = React.useState(false);

  const navigate = useNavigate();
  React.useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setIsAuthorised(!!user);
      navigate('/');
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <FirebaseContext.Provider value={{auth}}>
        <Routes appProps={{isAuthorised, setIsAuthorised}}/>
      </FirebaseContext.Provider>
    </ThemeProvider>  
  ); 
}

export default App;
 