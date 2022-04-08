import React from 'react';
import {
  AddIcon,
  ArrowDownIcon,
  BellBallIcon,
  BellIcon,
  CloseIcon,
  DashboardIcon,
  FilterIcon,
  KeyIcon,
  LineArrowDownIcon,
  LineArrowUpIcon,
  LogoIcon,
  LogoSmallIcon,
  MailIcon,
  MiniArrowDownIcon,
  MiniArrowUpIcon,
  PersonIcon,
  QuestionMarkRoundedIcon,
  SearchIcon,
  TransactionIcon,
} from '@/core/presenters/components/atoms/icon/icons';
import { AvailableIcons } from '@/core/domain';

export type IconProps = {
  icon: AvailableIcons;
  color?: string;
};

export const Icon: React.FC<IconProps> = ({ icon, color }) => {
  const getIcon = {
    add: <AddIcon color={color && color} />,
    arrowDown: <ArrowDownIcon color={color && color} />,
    bell: <BellIcon color={color && color} />,
    bellBall: <BellBallIcon color={color && color} />,
    dashboard: <DashboardIcon color={color && color} />,
    key: <KeyIcon color={color && color} />,
    lineArrowDown: <LineArrowDownIcon color={color && color} />,
    lineArrowUp: <LineArrowUpIcon color={color && color} />,
    logo: <LogoIcon color={color && color} />,
    logoSmall: <LogoSmallIcon color={color && color} />,
    mail: <MailIcon color={color && color} />,
    miniArrowDown: <MiniArrowDownIcon color={color && color} />,
    miniArrowUp: <MiniArrowUpIcon color={color && color} />,
    person: <PersonIcon color={color && color} />,
    questionMarkRounded: <QuestionMarkRoundedIcon color={color && color} />,
    transaction: <TransactionIcon color={color && color} />,
    search: <SearchIcon color={color && color} />,
    filter: <FilterIcon color={color && color} />,
    close: <CloseIcon color={color && color} />,
  };

  return getIcon[icon];
};
