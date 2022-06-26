import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/core/domain';

export const SquareIcon: React.FC<Icon> = ({ color }) => {
  const theme = useContext(ThemeContext);
  return (
    <svg width="442" height="442" viewBox="0 0 442 442" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="442" height="442" fill={color || theme.palette.grey[400]} />
    </svg>
  );
};
export default SquareIcon;
