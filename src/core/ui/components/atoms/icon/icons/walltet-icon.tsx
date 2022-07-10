import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const WalletIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.799 0.439522C11.5932 0.269149 11.3551 0.143907 11.0998 0.0716107C10.8444 -0.000685623 10.5772 -0.0184847 10.3148 0.0193239C10.0524 0.0571324 9.80049 0.149737 9.57471 0.291361C9.34893 0.432984 9.15417 0.620587 9.00257 0.842463L5.09143 6.56107H6.66L10.0543 1.59322C10.1049 1.5191 10.1699 1.45643 10.2452 1.40913C10.3206 1.36184 10.4048 1.33095 10.4924 1.31838C10.58 1.30581 10.6692 1.31185 10.7545 1.3361C10.8397 1.36036 10.9191 1.40231 10.9877 1.45934L12.0266 2.32035L9.15429 6.56107H10.7177L13.0269 3.14854L15.192 4.94275C15.3182 5.04744 15.4008 5.19705 15.4232 5.36144C15.4456 5.52583 15.4062 5.69279 15.3129 5.82869L14.8114 6.56107H16.38C16.6526 6.15308 16.7651 5.6554 16.695 5.16674C16.625 4.67807 16.3777 4.23412 16.002 3.92293L11.7977 0.439522H11.799ZM1.92857 5.24987C1.41708 5.24987 0.926543 5.4573 0.564866 5.82651C0.203188 6.19573 0 6.69649 0 7.21864V17.7187C0 18.589 0.338647 19.4236 0.941442 20.0389C1.54424 20.6543 2.3618 21 3.21429 21H15.4286C16.1106 21 16.7646 20.7234 17.2468 20.2311C17.7291 19.7389 18 19.0712 18 18.375V10.4999C18 9.80372 17.7291 9.13603 17.2468 8.64375C16.7646 8.15146 16.1106 7.87489 15.4286 7.87489H1.92857C1.75808 7.87489 1.59456 7.80575 1.474 7.68268C1.35344 7.55961 1.28571 7.39269 1.28571 7.21864C1.28571 7.04459 1.35344 6.87767 1.474 6.7546C1.59456 6.63153 1.75808 6.56238 1.92857 6.56238H3.81729L4.71729 5.24987H1.92857ZM13.5 14.4374H14.7857C14.9562 14.4374 15.1197 14.5066 15.2403 14.6297C15.3608 14.7527 15.4286 14.9197 15.4286 15.0937C15.4286 15.2678 15.3608 15.4347 15.2403 15.5577C15.1197 15.6808 14.9562 15.75 14.7857 15.75H13.5C13.3295 15.75 13.166 15.6808 13.0454 15.5577C12.9249 15.4347 12.8571 15.2678 12.8571 15.0937C12.8571 14.9197 12.9249 14.7527 13.0454 14.6297C13.166 14.5066 13.3295 14.4374 13.5 14.4374Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default WalletIcon;
