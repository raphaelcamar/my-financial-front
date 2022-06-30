import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  AddIcon,
  ArrowDownIcon,
  BellBallIcon,
  BellIcon,
  CircleIcon,
  CloseIcon,
  DashboardIcon,
  FilterIcon,
  GoogleIcon,
  KeyIcon,
  LineArrowDownIcon,
  LineArrowUpIcon,
  CloseEyeIcon,
  OpenEyeIconIcon,
  LogoNewIcon,
  LogoSmallIcon,
  MailIcon,
  MiniArrowDownIcon,
  MiniArrowUpIcon,
  PersonIcon,
  QuestionMarkRoundedIcon,
  SearchIcon,
  SquareIcon,
  TransactionIcon,
  CloseDrawerMobileIcon,
  OpenDrawerMobileIcon,
} from '@/core/presenters/components/atoms/icon/icons';
import { AvailableIcons } from '@/core/domain';
import { ColorProps, VariantProps } from '@/main/styled';

export type IconProps = {
  icon: AvailableIcons;
  color?: keyof ColorProps;
  shade?: keyof VariantProps;
};

export const Icon: React.FC<IconProps> = ({ icon, color, shade }) => {
  const theme = useContext(ThemeContext);
  const iconColor = theme.palette?.[color]?.[shade];

  const getIcon = {
    add: <AddIcon dataTestId="add" color={iconColor && iconColor} />,
    arrowDown: <ArrowDownIcon dataTestId="arrowDown" color={iconColor && iconColor} />,
    bell: <BellIcon dataTestId="bell" color={iconColor && iconColor} />,
    bellBall: <BellBallIcon dataTestId="bellBall" color={iconColor && iconColor} />,
    circle: <CircleIcon dataTestId="circle" color={iconColor && iconColor} />,
    close: <CloseIcon dataTestId="close" color={iconColor && iconColor} />,
    dashboard: <DashboardIcon dataTestId="dashboard" color={iconColor && iconColor} />,
    filter: <FilterIcon dataTestId="filter" color={iconColor} />,
    google: <GoogleIcon dataTestId="google" color={iconColor} />,
    key: <KeyIcon dataTestId="key" color={iconColor} />,
    lineArrowDown: <LineArrowDownIcon dataTestId="lineArrowDown" color={iconColor} />,
    lineArrowUp: <LineArrowUpIcon dataTestId="lineArrowUp" color={iconColor} />,
    logo: <LogoNewIcon dataTestId="logo" color={iconColor} />,
    logoSmall: <LogoSmallIcon dataTestId="logoSmall" color={iconColor} />,
    mail: <MailIcon dataTestId="mail" color={iconColor} />,
    miniArrowDown: <MiniArrowDownIcon dataTestId="miniArrowDown" color={iconColor} />,
    miniArrowUp: <MiniArrowUpIcon dataTestId="miniArrowUp" color={iconColor} />,
    person: <PersonIcon dataTestId="person" color={iconColor} />,
    questionMarkRounded: <QuestionMarkRoundedIcon dataTestId="questionMarkRounded" color={iconColor} />,
    search: <SearchIcon dataTestId="search" color={iconColor} />,
    square: <SquareIcon dataTestId="square" color={iconColor} />,
    transaction: <TransactionIcon dataTestId="transaction" color={iconColor} />,
    closeEye: <CloseEyeIcon color={iconColor} />,
    openEye: <OpenEyeIconIcon color={iconColor} />,
    closeDrawerMobile: <CloseDrawerMobileIcon color={iconColor} />,
    openDrawerMobile: <OpenDrawerMobileIcon color={iconColor} />,
  };

  return getIcon[icon];
};
