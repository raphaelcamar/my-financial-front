import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const TrashIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.763071 3.78947H8.23629L7.7895 10.8158C7.76906 11.1365 7.62498 11.4375 7.38659 11.6575C7.1482 11.8775 6.83343 12 6.50636 12H2.49364C2.16657 12 1.8518 11.8775 1.61341 11.6575C1.37502 11.4375 1.23094 11.1365 1.2105 10.8158L0.763071 3.78947ZM9 1.89474V3.15789H0V1.89474H1.92857V1.26316C1.92857 0.928148 2.06403 0.606858 2.30515 0.36997C2.54627 0.133082 2.87329 0 3.21429 0H5.78571C6.12671 0 6.45373 0.133082 6.69485 0.36997C6.93597 0.606858 7.07143 0.928148 7.07143 1.26316V1.89474H9ZM3.21429 1.89474H5.78571V1.26316H3.21429V1.89474Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default TrashIcon;
