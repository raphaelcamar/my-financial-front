import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const MoneyIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.36317 4.3889C4.1278 4.0611 3.73052 3.72223 3.73052 3.19444C3.73052 2.5889 4.28018 2.16667 5.1999 2.16667C6.16861 2.16667 6.5278 2.6389 6.56045 3.33333H7.76317C7.72508 2.37777 7.15366 1.5 6.01623 1.21667V0H4.38358V1.2C3.3278 1.43333 2.47882 2.13333 2.47882 3.20556C2.47882 4.4889 3.51827 5.12777 5.03663 5.5C6.39719 5.83333 6.66929 6.32223 6.66929 6.8389C6.66929 7.22223 6.40264 7.83333 5.1999 7.83333C4.07882 7.83333 3.638 7.32223 3.57814 6.66667H2.38086C2.44617 7.88333 3.33868 8.56667 4.38358 8.79444V10H6.01623V8.80556C7.07745 8.6 7.921 7.97223 7.921 6.83333C7.921 5.25556 6.59855 4.71667 5.36317 4.3889Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default MoneyIcon;
