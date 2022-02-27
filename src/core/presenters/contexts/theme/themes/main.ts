import { createTheme } from '@mui/material';

// 9c71fd
// 5F61DA - atual
// 9c72fb
export const main = createTheme({
  palette: {
    primary: {
      main: '#5F61DA',
      light: '#7979A1',
    },
    error: {
      main: '#d32f2f',
      light: '#FF9492',
    },

    background: {
      paper: '#E5E5E5',
      default: '#FFFFFF',
    },
    grey: {
      '100': '#DFDEDE',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'p',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    allVariants: {
      color: '#4A4A4A',
    },
    h2: {
      fontSize: 36,
      fontWeight: '700',
    },
  },
});

export default main;
