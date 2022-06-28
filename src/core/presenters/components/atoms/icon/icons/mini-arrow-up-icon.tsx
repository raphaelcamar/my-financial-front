import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const MiniArrowUpIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.400241 6H7.60045C7.67334 5.99977 7.7448 5.97963 7.80712 5.94174C7.86944 5.90386 7.92027 5.84967 7.95413 5.785C7.988 5.72032 8.00361 5.64763 7.9993 5.57473C7.99498 5.50183 7.97091 5.43149 7.92965 5.37128L4.32955 0.161989C4.18035 -0.0539963 3.82114 -0.0539963 3.67153 0.161989L0.0714315 5.37128C0.0297603 5.43136 0.00532331 5.50174 0.000775592 5.57476C-0.00377212 5.64778 0.0117434 5.72065 0.0456364 5.78546C0.0795294 5.85027 0.130504 5.90453 0.193021 5.94235C0.255538 5.98018 0.327207 6.00011 0.400241 6Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default MiniArrowUpIcon;
