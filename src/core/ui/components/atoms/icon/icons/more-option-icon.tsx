import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const MoreOptionIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 1C4.5 1.27614 4.72386 1.5 5 1.5C5.27614 1.5 5.5 1.27614 5.5 1C5.5 0.72386 5.27614 0.5 5 0.5C4.72386 0.5 4.5 0.72386 4.5 1Z"
        stroke={color || theme.palette.grey[400]}
      />
      <path
        d="M4.5 5C4.5 5.27615 4.72386 5.5 5 5.5C5.27614 5.5 5.5 5.27615 5.5 5C5.5 4.72386 5.27614 4.5 5 4.5C4.72386 4.5 4.5 4.72386 4.5 5Z"
        stroke={color || theme.palette.grey[400]}
      />
      <path
        d="M4.5 9C4.5 9.27615 4.72386 9.5 5 9.5C5.27614 9.5 5.5 9.27615 5.5 9C5.5 8.72385 5.27614 8.5 5 8.5C4.72386 8.5 4.5 8.72385 4.5 9Z"
        stroke={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default MoreOptionIcon;
