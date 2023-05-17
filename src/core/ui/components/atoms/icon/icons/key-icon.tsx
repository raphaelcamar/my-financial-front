import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const KeyIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();

  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.09162 4.70455C3.03253 5.07727 2.27344 6.08636 2.27344 7.27273C2.27344 8.77727 3.49616 10 5.00071 10C6.50526 10 7.72798 8.77727 7.72798 7.27273C7.72798 6.08636 6.96889 5.07727 5.9098 4.70455V2.72727H7.72798V0.909091H5.9098V0H4.09162V4.70455ZM5.9098 7.27273C5.9098 7.77273 5.50071 8.18182 5.00071 8.18182C4.50071 8.18182 4.09162 7.77273 4.09162 7.27273C4.09162 6.77273 4.50071 6.36364 5.00071 6.36364C5.50071 6.36364 5.9098 6.77273 5.9098 7.27273Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};

export default KeyIcon;
