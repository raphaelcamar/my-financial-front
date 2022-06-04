export type Variants = 'primary' | 'error' | 'success';

export interface IInputVariants {
  variant: Variants;
}

export interface CssInputVariants extends IInputVariants {
  disabled?: boolean;
}
