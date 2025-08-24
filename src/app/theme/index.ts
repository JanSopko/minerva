import { createTheme, TypeBackground } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eef3ffff',
      light: '#f5f9ffff',
      dark: '#09050a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#64b1ffff',
      light: '#a2c1ffff',
      dark: '#0a090e',
      contrastText: '#fff',
    },
    background: {
      default: '#09050a',
      paper: '#14141bff',
    },
  },
});

export default theme;
