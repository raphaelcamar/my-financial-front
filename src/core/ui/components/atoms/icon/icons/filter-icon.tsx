import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const FilterIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3582)">
        <path
          d="M4.73668 10H3.82179V4.95475L0.525391 0.788084V0H9.47276V0.783584L6.33334 4.95025V8.30474L4.73668 10ZM4.44967 9.33332H4.47662L5.70544 8.02858V4.71642L8.75676 0.666668H1.24942L4.44967 4.71192V9.33332Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3582">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default FilterIcon;
