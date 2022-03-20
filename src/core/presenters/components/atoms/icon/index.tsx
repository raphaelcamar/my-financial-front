import React from 'react';
import {
  KeyIcon,
  PersonIcon,
  LogoIcon,
  MailIcon,
  QuestionMarkRoundedIcon,
  ArrowDownIcon,
  DashboardIcon,
  LogoSmallIcon,
} from '@/core/presenters/components/atoms/icon/icons';
import { AvailableIcons } from '@/core/domain';

export type IconProps = {
  icon: AvailableIcons;
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
    dashboard: <DashboardIcon color={color && color} />,
    logoSmall: <LogoSmallIcon color={color && color} />,
  };

  return getIcon[icon];
};
