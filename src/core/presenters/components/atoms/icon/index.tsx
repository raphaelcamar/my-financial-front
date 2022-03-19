import React from 'react';
import {
  KeyIcon,
  PersonIcon,
  LogoIcon,
  MailIcon,
  QuestionMarkRoundedIcon,
  ArrowDownIcon,
} from '@/core/presenters/components/atoms/icon/icons';

export type GetIconProps = 'key' | 'logo' | 'person' | 'mail' | 'questionMarkRounded' | 'arrowDown';

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
    questionMarkRounded: <QuestionMarkRoundedIcon color={color && color} />,
    arrowDown: <ArrowDownIcon color={color && color} />,
  };

  return getIcon[icon];
};
