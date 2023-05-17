import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const ArrowLeftIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.69219 1.02235C6.80938 1.13956 6.87519 1.29849 6.87519 1.46422C6.87519 1.62995 6.80938 1.78889 6.69219 1.9061L3.59846 4.99985L6.69219 8.09357C6.80606 8.21151 6.86906 8.36938 6.86763 8.53326C6.86619 8.69707 6.8005 8.85388 6.68463 8.96976C6.56869 9.08563 6.41194 9.15132 6.24809 9.15276C6.08421 9.15419 5.92634 9.09119 5.80846 8.97732L2.27284 5.44172C2.15567 5.32452 2.08984 5.16557 2.08984 4.99985C2.08984 4.83412 2.15567 4.67518 2.27284 4.55797L5.80846 1.02235C5.92566 0.90518 6.08461 0.839355 6.25031 0.839355C6.41606 0.839355 6.575 0.90518 6.69219 1.02235Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default ArrowLeftIcon;
