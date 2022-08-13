import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const BarViewIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="17" height="6.41176" rx="0.5" stroke={color || theme.palette.grey[400]} />
      <rect y="9.5293" width="18" height="3.17647" rx="1" fill={color || theme.palette.grey[400]} />
      <rect y="14.8235" width="18" height="3.17647" rx="1" fill={color || theme.palette.grey[400]} />
    </svg>
  );
};
export default BarViewIcon;
