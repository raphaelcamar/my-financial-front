import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const TrashIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.76307 3.78947H9.23629L8.7895 10.8158C8.76906 11.1365 8.62498 11.4375 8.38659 11.6575C8.1482 11.8775 7.83343 12 7.50636 12H3.49364C3.16657 12 2.8518 11.8775 2.61341 11.6575C2.37502 11.4375 2.23094 11.1365 2.2105 10.8158L1.76307 3.78947ZM10 1.89474V3.15789H1V1.89474H2.92857V1.26316C2.92857 0.928148 3.06403 0.606858 3.30515 0.36997C3.54627 0.133082 3.87329 0 4.21429 0H6.78571C7.12671 0 7.45373 0.133082 7.69485 0.36997C7.93597 0.606858 8.07143 0.928148 8.07143 1.26316V1.89474H10ZM4.21429 1.89474H6.78571V1.26316H4.21429V1.89474Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default TrashIcon;
