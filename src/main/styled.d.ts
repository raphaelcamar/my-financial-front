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

export type FontColorProps = {
  primary: string;
  secondary: string;
};

export type BackgroundProps = {
  paper: string;
  default: string;
};

export type FontSizeProps = {
  small: number;
  medium: number;
  large: number;
  title: number;
  subtitle: number;
};

export type FontProps = {
  size: FontSizeProps;
  color: FontColorProps;
};

export type ColorProps = {
  primary: VariantProps;
  error: VariantProps;
  warning: VariantProps;
  background: BackgroundProps;
  grey: VariantProps;
  success: VariantProps;
  info: VariantProps;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: ColorProps;
    fonts: string[];
    font: FontProps;
  }
}
