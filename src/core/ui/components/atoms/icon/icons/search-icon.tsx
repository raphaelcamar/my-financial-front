import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const SearchIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3638)">
        <path
          d="M5.91348 6.79595C5.14833 7.34 4.20675 7.57671 3.27533 7.45919C2.34391 7.34162 1.49063 6.87843 0.8846 6.16138C0.278569 5.44433 -0.0359854 4.52577 0.00327865 3.58771C0.0425427 2.64965 0.43276 1.76058 1.0966 1.09669C1.76043 0.432796 2.64943 0.0425462 3.58741 0.00327892C4.5254 -0.0359884 5.4439 0.278592 6.1609 0.884676C6.87786 1.49076 7.34105 2.34411 7.45852 3.2756C7.57605 4.2071 7.33938 5.14876 6.79538 5.91395L9.80138 8.91938C9.86271 8.97652 9.91186 9.04543 9.946 9.12195C9.9801 9.19852 9.99843 9.28114 9.9999 9.36495C10.0014 9.44871 9.98595 9.53195 9.95457 9.60967C9.92319 9.68738 9.87648 9.75795 9.81724 9.81724C9.758 9.87648 9.68738 9.92319 9.60971 9.95457C9.532 9.98595 9.44876 10.0014 9.365 9.9999C9.28119 9.99843 9.19857 9.9801 9.12205 9.946C9.04548 9.91186 8.97662 9.86271 8.91948 9.80138L5.91348 6.79595ZM6.24043 3.74392C6.24043 3.08189 5.97748 2.44697 5.50938 1.97884C5.04129 1.51071 4.40642 1.24771 3.74444 1.24771C3.08246 1.24771 2.4476 1.51071 1.9795 1.97884C1.51141 2.44697 1.24844 3.08189 1.24844 3.74392C1.24844 4.40596 1.51141 5.04086 1.9795 5.509C2.4476 5.97714 3.08246 6.24014 3.74444 6.24014C4.40642 6.24014 5.04129 5.97714 5.50938 5.509C5.97748 5.04086 6.24043 4.40596 6.24043 3.74392Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3638">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SearchIcon;
