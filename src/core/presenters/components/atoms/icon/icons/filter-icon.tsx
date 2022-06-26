import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/core/domain';

export const FilterIcon: React.FC<Icon> = ({ color }) => {
  const theme = useContext(ThemeContext);
  return (
    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.00144 19H6.26316V9.41403L0 1.49736V0H17V1.48881L11.0351 
        9.40547V15.779L8.00144 19ZM7.45614 17.7333H7.50733L9.8421 15.2543V8.96119L15.6396 
        1.26667H1.37566L7.45614 8.95264V17.7333Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default FilterIcon;
