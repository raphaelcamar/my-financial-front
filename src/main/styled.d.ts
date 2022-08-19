import 'styled-components';

export type VariantProps = {
  light: string;
  main: string;
  dark: string;
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type BackgroundProps = {
  paper: string;
  default: string;
};

export type BreakpointTypes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type FunctionBreakpointTypes = {
  up: (breakpoint: keyof BreakpointTypes) => string;
  down: (breakpoint: keyof BreakpointTypes) => string;
};

export type FontSizeProps = {
  xsmall: string;
  small: string;
  normal: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
};

export type FontWeightProps = {
  100: number;
  200: number;
  300: number;
  400: number;
  500: number;
  600: number;
  700: number;
  800: number;
  900: number;
};

export type ColorProps = {
  primary: VariantProps;
  error: VariantProps;
  warning: VariantProps;
  background: BackgroundProps;
  grey: Omit<VariantProps, 'light' | 'dark' | 'main'>;
  success: VariantProps;
  info: VariantProps;
  green: VariantProps;
  brown: VariantProps;
  purple: VariantProps;
  skin: VariantProps;
};

export type FontColorProps = {
  primary: string;
  error: string;
  warning: string;
  grey: string;
  success: string;
  info: string;
  default: string;
  secondary: string;
  white: string;
};

export type FontProps = {
  size: FontSizeProps;
  color: FontColorProps;
  size: FontSizeProps;
  weight: FontWeightProps;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: ColorProps;
    fonts: string[];
    font: FontProps;
    breakpoints: FunctionBreakpointTypes;
  }
}
