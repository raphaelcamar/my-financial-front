import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const CloseEyeIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.455078 3.63623C0.455078 3.63623 2.04599 5.45441 5.00053 5.45441C7.95508 5.45441 9.54599 3.63623 9.54599 3.63623M1.36417 4.38396L0.455078 5.45441M9.54599 5.45441L8.63871 4.38532M3.59781 5.30896L3.18235 6.59078M6.39281 5.31259L6.81871 6.59078"
        stroke={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default CloseEyeIcon;
