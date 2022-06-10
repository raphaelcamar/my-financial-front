import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const DashboardIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.6 13.5H17V17H15.6V13.5ZM12.8 10H14.2V17H12.8V10ZM6.5 17C5.57208 16.9989 4.68249 16.6298 4.02635 15.9736C3.37022 15.3175 3.00111 14.4279 3 13.5H4.4C4.4 13.9153 4.52316 14.3214 4.75391 14.6667C4.98466 15.012 5.31264 15.2812 5.69636 15.4401C6.08009 15.5991 6.50233 15.6407 6.90969 15.5596C7.31705 15.4786 7.69123 15.2786 7.98492 14.9849C8.27861 14.6912 8.47862 14.3171 8.55965 13.9097C8.64068 13.5023 8.59909 13.0801 8.44015 12.6964C8.2812 12.3126 8.01204 11.9847 7.6667 11.7539C7.32135 11.5232 6.91534 11.4 6.5 11.4V10C7.42826 10 8.3185 10.3687 8.97487 11.0251C9.63125 11.6815 10 12.5717 10 13.5C10 14.4283 9.63125 15.3185 8.97487 15.9749C8.3185 16.6313 7.42826 17 6.5 17Z"
        fill={color || theme.palette.grey[400]}
      />
      <path
        d="M18.5714 0H1.42857C1.04981 0.000378198 0.686664 0.151009 0.418837 0.418837C0.151009 0.686664 0.000378198 1.04981 0 1.42857V18.5714C0.000378198 18.9502 0.151009 19.3133 0.418837 19.5812C0.686664 19.849 1.04981 19.9996 1.42857 20H18.5714C18.9501 19.9994 19.3132 19.8487 19.581 19.581C19.8487 19.3132 19.9994 18.9501 20 18.5714V1.42857C19.9996 1.04981 19.849 0.686664 19.5812 0.418837C19.3133 0.151009 18.9502 0.000378198 18.5714 0ZM18.5714 6.42857H8.57143V1.42857H18.5714V6.42857ZM7.14286 1.42857V6.42857H1.42857V1.42857H7.14286ZM1.42857 18.5714V7.85714H18.5714L18.5729 18.5714H1.42857Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default DashboardIcon;
