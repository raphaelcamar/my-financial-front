import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const BellIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.9102 18.7172V19.4209C15.9102 20.1675 15.6184 20.8834 15.0989 21.4113C14.5794 21.9392 13.8749 22.2358 13.1402 22.2358C12.4055 22.2358 11.701 21.9392 11.1815 21.4113C10.662 20.8834 10.3702 20.1675 10.3702 19.4209V18.7172M20.5708 17.2848C19.4594 15.9024 18.6747 15.1987 18.6747 11.3877C18.6747 7.89779 16.9209 6.65443 15.4774 6.05056C15.2857 5.97052 15.1052 5.78668 15.0468 5.58656C14.7936 4.71089 14.0837 3.93945 13.1402 3.93945C12.1967 3.93945 11.4864 4.71133 11.2358 5.58744C11.1774 5.78975 10.9969 5.97052 10.8052 6.05056C9.35997 6.65531 7.60792 7.89427 7.60792 11.3877C7.60576 15.1987 6.82106 15.9024 5.70958 17.2848C5.24906 17.8574 5.65245 18.7172 6.45792 18.7172H19.8268C20.628 18.7172 21.0288 17.8548 20.5708 17.2848Z"
        stroke={color || theme.palette.grey[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default BellIcon;
