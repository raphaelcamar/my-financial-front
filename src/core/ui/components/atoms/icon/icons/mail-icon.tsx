import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const MailIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 1H1C0.45 1 0.005 1.45 0.005 2L0 8C0 8.55 0.45 9 1 9H9C9.55 9 10 8.55 10 8V2C10 1.45 9.55 1 9 1ZM9 3L5 5.5L1 3V2L5 4.5L9 2V3Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};

export default MailIcon;
