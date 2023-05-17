import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const ArrowDownIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();

  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.220116 2.43461C0.361098 2.29858 0.552286 2.22217 0.751634 2.22217C0.950983 2.22217 1.14217 2.29858 1.28316 2.43461L5.00453 6.0263L8.72592 2.43461C8.86771 2.30244 9.05762 2.2293 9.25473 2.23096C9.45186 2.23261 9.64041 2.30892 9.7798 2.44345C9.91919 2.57798 9.99826 2.75997 9.99997 2.95022C10.0017 3.14047 9.92591 3.32375 9.78897 3.4606L5.53606 7.56528C5.39508 7.70131 5.20389 7.77772 5.00453 7.77772C4.80519 7.77772 4.614 7.70131 4.47302 7.56528L0.220116 3.4606C0.0791756 3.32453 0 3.14001 0 2.94761C0 2.7552 0.0791756 2.57068 0.220116 2.43461Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};

export default ArrowDownIcon;
