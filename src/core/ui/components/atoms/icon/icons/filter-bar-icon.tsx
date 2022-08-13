import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const FilterBarIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.58398 7.10425C2.58398 6.59039 2.78811 6.09758 3.15147 5.73423C3.51482 5.37088 4.00763 5.16675 4.52148 5.16675H26.4798C26.9937 5.16675 27.4865 5.37088 27.8498 5.73423C28.2132 6.09758 28.4173 6.59039 28.4173 7.10425C28.4173 7.6181 28.2132 8.11092 27.8498 8.47427C27.4865 8.83762 26.9937 9.04175 26.4798 9.04175H4.52148C4.00763 9.04175 3.51482 8.83762 3.15147 8.47427C2.78811 8.11092 2.58398 7.6181 2.58398 7.10425ZM7.75065 14.8542C7.75065 14.3404 7.95478 13.8476 8.31813 13.4842C8.68148 13.1209 9.17429 12.9167 9.68815 12.9167H21.3132C21.827 12.9167 22.3198 13.1209 22.6832 13.4842C23.0465 13.8476 23.2507 14.3404 23.2507 14.8542C23.2507 15.3681 23.0465 15.8609 22.6832 16.2243C22.3198 16.5876 21.827 16.7917 21.3132 16.7917H9.68815C9.17429 16.7917 8.68148 16.5876 8.31813 16.2243C7.95478 15.8609 7.75065 15.3681 7.75065 14.8542ZM13.5632 20.6667C13.0493 20.6667 12.5565 20.8709 12.1931 21.2342C11.8298 21.5976 11.6257 22.0904 11.6257 22.6042C11.6257 23.1181 11.8298 23.6109 12.1931 23.9743C12.5565 24.3376 13.0493 24.5417 13.5632 24.5417H17.4382C17.952 24.5417 18.4448 24.3376 18.8082 23.9743C19.1715 23.6109 19.3757 23.1181 19.3757 22.6042C19.3757 22.0904 19.1715 21.5976 18.8082 21.2342C18.4448 20.8709 17.952 20.6667 17.4382 20.6667H13.5632Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default FilterBarIcon;