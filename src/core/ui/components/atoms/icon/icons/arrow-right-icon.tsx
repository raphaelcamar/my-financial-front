import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const ArrowRightIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.29246 14.364C5.10499 14.1764 4.99968 13.9221 4.99968 13.657C4.99968 13.3918 5.10499 13.1375 5.29246 12.95L10.2425 7.99995L5.29246 3.04995C5.11031 2.86135 5.00951 2.60875 5.01179 2.34655C5.01407 2.08435 5.11924 1.83354 5.30465 1.64813C5.49005 1.46272 5.74087 1.35756 6.00306 1.35528C6.26526 1.353 6.51786 1.45379 6.70646 1.63595L12.3635 7.29295C12.5509 7.48048 12.6563 7.73479 12.6563 7.99995C12.6563 8.26512 12.5509 8.51942 12.3635 8.70695L6.70646 14.364C6.51894 14.5514 6.26463 14.6567 5.99946 14.6567C5.7343 14.6567 5.47999 14.5514 5.29246 14.364V14.364Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default ArrowRightIcon;
