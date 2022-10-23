import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const ArrowLeftIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.7075 1.63605C10.895 1.82358 11.0003 2.07788 11.0003 2.34305C11.0003 2.60821 10.895 2.86252 10.7075 3.05005L5.75754 8.00005L10.7075 12.95C10.8897 13.1387 10.9905 13.3913 10.9882 13.6535C10.9859 13.9156 10.8808 14.1665 10.6954 14.3519C10.5099 14.5373 10.2591 14.6424 9.99694 14.6447C9.73474 14.647 9.48214 14.5462 9.29354 14.364L3.63654 8.70705C3.44907 8.51952 3.34375 8.26521 3.34375 8.00005C3.34375 7.73488 3.44907 7.48058 3.63654 7.29305L9.29354 1.63605C9.48106 1.44858 9.73537 1.34326 10.0005 1.34326C10.2657 1.34326 10.52 1.44858 10.7075 1.63605V1.63605Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default ArrowLeftIcon;
