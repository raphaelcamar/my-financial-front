import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const MiniArrowDownIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.4997 1.25H0.499444C0.408321 1.25029 0.319001 1.27546 0.241098 1.32282C0.163197 1.37018 0.0996613 1.43792 0.0573337 1.51876C0.0150054 1.59959 -0.00451388 1.69047 0.000877948 1.78159C0.00626978 1.87271 0.0363677 1.96064 0.0879323 2.0359L4.58806 8.54751C4.77456 8.8175 5.22358 8.8175 5.41059 8.54751L9.91071 2.0359C9.9628 1.9608 9.99335 1.87283 9.99903 1.78155C10.0047 1.69028 9.98533 1.59919 9.94295 1.51818C9.90059 1.43717 9.83688 1.36934 9.75873 1.32206C9.68058 1.27478 9.59099 1.24986 9.4997 1.25Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};

export default MiniArrowDownIcon;
