import React from 'react';
import {
  KeyIcon,
  PersonIcon,
  LogoIcon,
} from '@/core/presenters/components/atoms/icon/icons';

export type GetIconProps = 'key' | 'logo' | 'person';

export type IconProps = {
  icon: GetIconProps;
};

const getIcon = {
  key: <KeyIcon />,
  logo: <LogoIcon />,
  person: <PersonIcon />,
};

export const Icon: React.FC<IconProps> = ({ icon }) => getIcon[icon];
