import React, { Suspense, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { WrapperIcon } from './styles';
import { ColorProps, VariantProps } from '@/main/styled';
import { Icons } from './icons/imports';

export type AvailableIcons = keyof typeof Icons;

export type IconProps = {
  icon: AvailableIcons;
  color?: keyof ColorProps;
  shade?: keyof VariantProps;
  size?: number;
};

export const Icon: React.FC<IconProps> = ({ icon, color, shade, size }) => {
  const theme = useContext(ThemeContext);
  const iconColor = theme.palette?.[color]?.[shade];

  const ChoicedIcon = Icons[icon];

  return (
    <Suspense fallback={<></>}>
      <WrapperIcon data-testid="icon" size={size}>
        <ChoicedIcon color={iconColor && iconColor} />
      </WrapperIcon>
    </Suspense>
  );
};
