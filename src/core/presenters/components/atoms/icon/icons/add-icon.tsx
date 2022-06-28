import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const AddIcon: React.FC<Icon> = ({ color, dataTestId }) => {
  const theme = useThemeContext();

  return (
    <svg
      data-testid={dataTestId || 'icon'}
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.05422 9V5M5.05422 5V1M5.05422 5H9.10843M5.05422 5H1"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default AddIcon;
