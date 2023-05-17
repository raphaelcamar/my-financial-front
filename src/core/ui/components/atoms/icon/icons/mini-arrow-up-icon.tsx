import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const MiniArrowUpIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3611)">
        <path
          d="M0.500301 8H9.50056C9.59168 7.99973 9.681 7.97623 9.7589 7.93203C9.8368 7.88784 9.90034 7.82461 9.94266 7.74917C9.985 7.67371 10.0045 7.5889 9.99913 7.50385C9.99373 7.4188 9.96364 7.33674 9.91206 7.26649L5.41194 1.18899C5.22544 0.937004 4.77643 0.937004 4.58941 1.18899L0.0892894 7.26649C0.0372004 7.33659 0.00665414 7.4187 0.000969488 7.50389C-0.00471515 7.58908 0.0146793 7.67409 0.0570455 7.7497C0.0994118 7.82531 0.16313 7.88862 0.241276 7.93274C0.319423 7.97688 0.409009 8.00013 0.500301 8Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3611">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MiniArrowUpIcon;
