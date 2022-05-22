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
    add: <AddIcon dataTestId="add" color={color && color} />,
    arrowDown: <ArrowDownIcon dataTestId="arrowDown" color={color && color} />,
    bell: <BellIcon dataTestId="bell" color={color && color} />,
    bellBall: <BellBallIcon dataTestId="bellBall" color={color && color} />,
    dashboard: <DashboardIcon dataTestId="dashboard" color={color && color} />,
    key: <KeyIcon dataTestId="key" color={color && color} />,
    lineArrowDown: <LineArrowDownIcon dataTestId="lineArrowDown" color={color && color} />,
    lineArrowUp: <LineArrowUpIcon dataTestId="lineArrowUp" color={color && color} />,
    logo: <LogoIcon dataTestId="logo" color={color && color} />,
    logoSmall: <LogoSmallIcon dataTestId="logoSmall" color={color && color} />,
    mail: <MailIcon dataTestId="mail" color={color && color} />,
    miniArrowDown: <MiniArrowDownIcon dataTestId="miniArrowDown" color={color && color} />,
    miniArrowUp: <MiniArrowUpIcon dataTestId="miniArrowUp" color={color && color} />,
    person: <PersonIcon dataTestId="person" color={color && color} />,
    questionMarkRounded: <QuestionMarkRoundedIcon dataTestId="questionMarkRounded" color={color && color} />,
    transaction: <TransactionIcon dataTestId="transaction" color={color && color} />,
    search: <SearchIcon dataTestId="search" color={color && color} />,
    filter: <FilterIcon dataTestId="filter" color={color && color} />,
    close: <CloseIcon dataTestId="close" color={color && color} />,
  };

  return getIcon[icon];
};
