import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const AddIcon: React.FC<Icon> = ({ color, dataTestId }) => {
  const theme = useThemeContext();

  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.59386 9V5M4.59386 5V1M4.59386 5H8.2795M4.59386 5H0.908203"
        stroke={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default AddIcon;
