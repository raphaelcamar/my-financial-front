import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const BellBallIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();

  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.99788 7.42387V7.703C5.99788 7.99909 5.88213 8.28306 5.67606 8.49244C5.47003 8.70181 5.19056 8.81944 4.89919 8.81944C4.60778 8.81944 4.32831 8.70181 4.12228 8.49244C3.91625 8.28306 3.80047 7.99909 3.80047 7.703V7.42387M7.84641 6.85572C7.40556 6.30744 7.09431 6.02831 7.09431 4.51675C7.09431 3.1325 6.39872 2.63935 5.82619 2.39984C5.75016 2.36809 5.67856 2.29517 5.65538 2.2158C5.55497 1.86848 5.27341 1.5625 4.89919 1.5625C4.52494 1.5625 4.24322 1.86865 4.14381 2.21615C4.12066 2.29639 4.04906 2.36809 3.973 2.39984C3.39981 2.6397 2.70488 3.13112 2.70488 4.51675C2.70402 6.02831 2.39278 6.30744 1.95193 6.85572C1.76927 7.08284 1.92927 7.42387 2.24875 7.42387H7.55131C7.86906 7.42387 8.02803 7.08178 7.84641 6.85572Z"
        stroke={color || theme.palette.grey[400]}
      />
      <path
        d="M6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2C6.22386 2 6 2.22386 6 2.5C6 2.77614 6.22386 3 6.5 3Z"
        fill={color || theme.palette.grey[400]}
        stroke={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default BellBallIcon;
