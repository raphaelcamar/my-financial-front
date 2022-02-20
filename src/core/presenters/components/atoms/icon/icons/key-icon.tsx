import React from 'react';
import { Icon } from './types';

// TODO trocar cor para tema
export const KeyIcon: React.FC<Icon> = ({ color = '#5F61DA' }) => (
  <svg
    width="12"
    height="22"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 10.35C1.67 11.17 0 13.39 0 16C0 19.31 2.69 22 6 22C9.31 22 12 19.31 12 16C12 13.39 10.33 11.17 8 10.35V6H12L12 2L8 2V0H4L4 10.35ZM8 16C8 17.1 7.1 18 6 18C4.9 18 4 17.1 4 16C4 14.9 4.9 14 6 14C7.1 14 8 14.9 8 16Z"
      fill={color}
    />
  </svg>
);
export default KeyIcon;
