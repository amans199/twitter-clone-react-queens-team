import {  createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1DA1F2',
        },
        secondary: {
            main: '#657786',
        },
        success: {
            main: '#AAB8C2',     
        },
        info: {
            main: '#E1E8ED',
        },
        light: {
            main: '#F5F8FA',     
        },
        dark: {
            main: '#14171A',
        },

      },
});
 
export default theme;