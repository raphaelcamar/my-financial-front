import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const BarViewIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3560)">
        <path
          d="M9.44401 0.277832H0.555122C0.401709 0.277832 0.277344 0.402197 0.277344 0.55561V3.56214C0.277344 3.71556 0.401709 3.83992 0.555122 3.83992H9.44401C9.59742 3.83992 9.72179 3.71556 9.72179 3.56214V0.55561C9.72179 0.402197 9.59742 0.277832 9.44401 0.277832Z"
          stroke={color || theme.palette.grey[400]}
        />
        <path
          d="M9.44444 5.29395H0.555556C0.248731 5.29395 0 5.54268 0 5.8495V6.5031C0 6.80992 0.248731 7.05865 0.555556 7.05865H9.44444C9.75127 7.05865 10 6.80992 10 6.5031V5.8495C10 5.54268 9.75127 5.29395 9.44444 5.29395Z"
          fill={color || theme.palette.grey[400]}
        />
        <path
          d="M9.44444 8.23535H0.555556C0.248731 8.23535 0 8.48408 0 8.79091V9.4445C0 9.75133 0.248731 10.0001 0.555556 10.0001H9.44444C9.75127 10.0001 10 9.75133 10 9.4445V8.79091C10 8.48408 9.75127 8.23535 9.44444 8.23535Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3560">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BarViewIcon;
