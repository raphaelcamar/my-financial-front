import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const PhotoIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3629)">
        <path
          d="M1.25 1.6665V0.416504H2.08333V1.6665H3.33333V2.49984H2.08333V3.74984H1.25V2.49984H0V1.6665H1.25ZM2.5 4.1665V2.9165H3.75V1.6665H6.66667L7.42917 2.49984H8.75C9.20833 2.49984 9.58333 2.87484 9.58333 3.33317V8.33317C9.58333 8.7915 9.20833 9.1665 8.75 9.1665H2.08333C1.625 9.1665 1.25 8.7915 1.25 8.33317V4.1665H2.5ZM5.41667 7.9165C6.56667 7.9165 7.5 6.98317 7.5 5.83317C7.5 4.68317 6.56667 3.74984 5.41667 3.74984C4.26667 3.74984 3.33333 4.68317 3.33333 5.83317C3.33333 6.98317 4.26667 7.9165 5.41667 7.9165ZM4.08333 5.83317C4.08333 6.57067 4.67917 7.1665 5.41667 7.1665C6.15417 7.1665 6.75 6.57067 6.75 5.83317C6.75 5.09567 6.15417 4.49984 5.41667 4.49984C4.67917 4.49984 4.08333 5.09567 4.08333 5.83317Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3629">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default PhotoIcon;
