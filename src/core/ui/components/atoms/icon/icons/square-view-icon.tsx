import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const SquareViewIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="7" height="7" rx="1" fill={color || theme.palette.grey[400]} />
      <rect x="11" width="7" height="7" rx="1" fill={color || theme.palette.grey[400]} />
      <rect y="11" width="7" height="7" rx="1" fill={color || theme.palette.grey[400]} />
      <rect x="11" y="11" width="7" height="7" rx="1" fill={color || theme.palette.grey[400]} />
    </svg>
  );
};
export default SquareViewIcon;
