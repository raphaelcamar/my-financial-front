import React from 'react';
import { KeyIcon, PersonIcon, LogoIcon, MailIcon } from '@/core/presenters/components/atoms/icon/icons';

export type GetIconProps = 'key' | 'logo' | 'person' | 'mail';

export type IconProps = {
  icon: GetIconProps;
  color?: string;
};

export const Icon: React.FC<IconProps> = ({ icon, color }) => {
  const getIcon = {
    key: <KeyIcon color={color && color} />,
    logo: <LogoIcon color={color && color} />,
    person: <PersonIcon color={color && color} />,
    mail: <MailIcon color={color && color} />,
  };

  return getIcon[icon];
};
