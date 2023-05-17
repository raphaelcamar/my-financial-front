import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const OpenEyeIconIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3622)">
        <path
          d="M9.03225 4.52836C9.2477 4.81018 9.2477 5.19063 9.03225 5.472C8.35361 6.35791 6.72543 8.182 4.82452 8.182C2.92362 8.182 1.29544 6.35791 0.616805 5.472C0.511983 5.33705 0.455078 5.17105 0.455078 5.00018C0.455078 4.8293 0.511983 4.6633 0.616805 4.52836C1.29544 3.64245 2.92362 1.81836 4.82452 1.81836C6.72543 1.81836 8.35361 3.64245 9.03225 4.52836Z"
          stroke={color || theme.palette.grey[400]}
        />
        <path
          d="M4.82457 6.3635C5.57771 6.3635 6.18821 5.75298 6.18821 4.99987C6.18821 4.24675 5.57771 3.63623 4.82457 3.63623C4.07146 3.63623 3.46094 4.24675 3.46094 4.99987C3.46094 5.75298 4.07146 6.3635 4.82457 6.3635Z"
          stroke={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3622">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default OpenEyeIconIcon;
