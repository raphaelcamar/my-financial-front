import React from 'react';
import ReactSkeleton, { SkeletonStyleProps } from 'react-loading-skeleton';
import { ColorProps, Shade } from '@/main/styled';
import 'react-loading-skeleton/dist/skeleton.css';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

interface ISkeleton extends SkeletonStyleProps {
  color?: keyof ColorProps;
  shade?: Shade;
}

export const Skeleton: React.FC<ISkeleton> = ({ color = 'grey', shade = 200, ...props }) => {
  const theme = useThemeContext();

  return <ReactSkeleton {...props} baseColor={theme.palette[color][shade]} />;
};
