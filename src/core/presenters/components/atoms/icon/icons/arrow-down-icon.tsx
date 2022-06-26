import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/core/domain';

export const ArrowDownIcon: React.FC<Icon> = ({ color }) => {
  const theme = useContext(ThemeContext);

  return (
    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.198104 0.1912C0.324988 0.0687746 0.497057 0 0.676471 0C0.855885 0 1.02795 0.0687746 1.15484 0.1912L4.50408 3.42372L7.85333 0.1912C7.98094 0.0722442 8.15186 0.00642175 8.32926 0.00790964C8.50667 0.00939752 8.67637 0.0780765 8.80182 0.199154C8.92727 0.320232 8.99843 0.484021 8.99997 0.655244C9.00152 0.826468 8.93332 0.991425 8.81007 1.11459L4.98245 4.8088C4.85557 4.93123 4.6835 5 4.50408 5C4.32467 5 4.1526 4.93123 4.02572 4.8088L0.198104 1.11459C0.071258 0.992127 0 0.826055 0 0.652894C0 0.479733 0.071258 0.313661 0.198104 0.1912Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};

export default ArrowDownIcon;
