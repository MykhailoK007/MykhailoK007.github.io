import { createTheme } from "@mui/material/styles";
import components from './components';

export const darkTheme =  createTheme({
    palette: {
        mode: 'dark'
    },
    components
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light'
    },
    components
});