import { createTheme } from '@mui/material';

export const dark = createTheme({
  palette: {
    primary: {
      main: '#teste',
      light: '#7979A1',
    },
    text: {
      primary: '#4A4A4A',
      disabled: '#BDBDBD',
      secondary: '#7979A1',
    },
    background: {
      paper: '#E5E5E5',
      default: '#FFFFFF',
    },
  },
});

export default dark;
