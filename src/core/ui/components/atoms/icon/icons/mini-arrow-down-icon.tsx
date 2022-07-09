import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const MiniArrowDownIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.59976 4.76837e-07L0.399555 4.76837e-07C0.326656 0.000229836 0.2552 0.020371 0.192878 0.0582557C0.130557 0.0961409 0.0797286 0.150335 0.0458665 0.215005C0.0120039 0.279675 -0.00361156 0.352373 0.000701904 0.425272C0.00501537 0.498171 0.0290937 0.568511 0.0703454 0.628722L3.67045 5.83801C3.81965 6.054 4.17886 6.054 4.32847 5.83801L7.92857 0.628722C7.97024 0.568637 7.99468 0.498261 7.99922 0.425241C8.00377 0.352221 7.98826 0.279348 7.95436 0.21454C7.92047 0.149733 7.8695 0.0954695 7.80698 0.0576458C7.74446 0.0198226 7.67279 -0.000114441 7.59976 4.76837e-07Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default MiniArrowDownIcon;
