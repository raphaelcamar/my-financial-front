import { DefaultTheme } from 'styled-components';
import { BreakpointTypes } from '@/main/styled';

const breakpoints: BreakpointTypes = {
  xs: 200,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const mainTheme: DefaultTheme = {
  palette: {
    primary: {
      light: '#AFB0ED',
      main: '#5F61DA',
      dark: '#4345CB',
      '50': '#ECECFB',
      '100': '#CFD0F4',
      '200': '#AFB0ED',
      '300': '#8F90E5',
      '400': '#7779E0',
      '500': '#5F61DA',
      '600': '#5759D6',
      '700': '#4D4FD0',
      '800': '#4345CB',
      '900': '#3233C2',
    },

    error: {
      main: '#F04438',
      light: '#FDA29B',
      dark: '#912018',
      '50': '#FEF3F2',
      '100': '#FEE4E2',
      '200': '#FECDCA',
      '300': '#FDA29B',
      '400': '#F97066',
      '500': '#F04438',
      '600': '#D92D20',
      '700': '#B42318',
      '800': '#912018',
      '900': '#7A271A',
    },

    warning: {
      main: '#F79009',
      dark: '#93370D',
      light: '#FEDF89',
      '50': '#FFFAEB',
      '100': '#FEF0C7',
      '200': '#FEDF89',
      '300': '#FEC84B',
      '400': '#FDB022',
      '500': '#F79009',
      '600': '#DC6803',
      '700': '#B54708',
      '800': '#93370D',
      '900': '#7A2E0E',
    },

    background: {
      paper: '#F9FAFB',
      default: '#FAFAFA',
    },
    grey: {
      '50': '#F9FAFB',
      '100': '#F2F4F7',
      '200': '#EAECF0',
      '300': '#D0D5DD',
      '400': '#98A2B3',
      '500': '#667085',
      '600': '#475467',
      '700': '#344054',
      '800': '#1D2939',
      '900': '#101828',
    },

    success: {
      main: '#12B76A',
      light: '#A6F4C5',
      dark: '#05603A',
      '50': '#ECFDF3',
      '100': '#D1FADF',
      '200': '#A6F4C5',
      '300': '#6CE9A6',
      '400': '#32D583',
      '500': '#12B76A',
      '600': '#039855',
      '700': '#027A48',
      '800': '#05603A',
      '900': '#054F31',
    },

    info: {
      main: '#2E90FA',
      light: '#B2DDFF',
      dark: '#1849A9',
      '50': '#EFF8FF',
      '100': '#D1E9FF',
      '200': '#B2DDFF',
      '300': '#84CAFF',
      '400': '#53B1FD',
      '500': '#2E90FA',
      '600': '#1570EF',
      '700': '#175CD3',
      '800': '#1849A9',
      '900': '#194185',
    },
  },
  fonts: ['Nunito', 'sans-serif'],
  font: {
    color: {
      primary: '#5F61DA',
      error: '#F04438',
      grey: '#667085',
      info: '#2E90FA',
      success: '#12B76A',
      warning: '#F79009',
      default: '#4A4A4A',
      secondary: '#98A2B3',
      white: '#FAFAFA',
    },
    size: {
      xsmall: '0.75rem',
      small: '0.875rem',
      normal: '1rem',
      large: '1.125rem',
      xlarge: '1.375rem',
      xxlarge: '1.5rem',
      xxxlarge: '2.25rem',
    },
    weight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
  },
  breakpoints: {
    up: key => `min-width: ${breakpoints[key]}px`,
    down: key => `max-width: ${breakpoints[key]}px`,
  },
};