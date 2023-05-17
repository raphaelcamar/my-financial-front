import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const ArrowRightIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.30799 8.97764C3.19082 8.86039 3.125 8.70145 3.125 8.53577C3.125 8.37002 3.19082 8.21108 3.30799 8.09389L6.40176 5.00011L3.30799 1.90636C3.19414 1.78849 3.13114 1.63061 3.13257 1.46674C3.13399 1.30286 3.19972 1.1461 3.31561 1.03022C3.43148 0.914342 3.58824 0.848617 3.75211 0.847192C3.91599 0.845767 4.07386 0.90876 4.19174 1.02261L7.72739 4.55824C7.84451 4.67544 7.91039 4.83439 7.91039 5.00011C7.91039 5.16584 7.84451 5.32478 7.72739 5.44199L4.19174 8.97764C4.07454 9.09477 3.91559 9.16058 3.74986 9.16058C3.58414 9.16058 3.42519 9.09477 3.30799 8.97764Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default ArrowRightIcon;
