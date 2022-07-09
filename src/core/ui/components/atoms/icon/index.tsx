import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { WrapperIcon } from './styles';
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
  PenIcon,
  TrashIcon,
} from '@/core/ui/components/atoms/icon/icons';
import { AvailableIcons } from '@/core/domain';
import { ColorProps, VariantProps } from '@/main/styled';

export type IconProps = {
  icon: AvailableIcons;
  color?: keyof ColorProps;
  shade?: keyof VariantProps;
  size?: number;
};

export const Icon: React.FC<IconProps> = ({ icon, color, shade, size }) => {
  const theme = useContext(ThemeContext);
  const iconColor = theme.palette?.[color]?.[shade];

  const getIcon = {
    add: <AddIcon color={iconColor && iconColor} />,
    arrowDown: <ArrowDownIcon color={iconColor && iconColor} />,
    bell: <BellIcon color={iconColor && iconColor} />,
    bellBall: <BellBallIcon color={iconColor && iconColor} />,
    circle: <CircleIcon color={iconColor && iconColor} />,
    close: <CloseIcon color={iconColor && iconColor} />,
    dashboard: <DashboardIcon color={iconColor && iconColor} />,
    filter: <FilterIcon color={iconColor} />,
    google: <GoogleIcon color={iconColor} />,
    key: <KeyIcon color={iconColor} />,
    lineArrowDown: <LineArrowDownIcon color={iconColor} />,
    lineArrowUp: <LineArrowUpIcon color={iconColor} />,
    logo: <LogoNewIcon color={iconColor} />,
    logoSmall: <LogoSmallIcon color={iconColor} />,
    mail: <MailIcon color={iconColor} />,
    miniArrowDown: <MiniArrowDownIcon color={iconColor} />,
    miniArrowUp: <MiniArrowUpIcon color={iconColor} />,
    person: <PersonIcon color={iconColor} />,
    questionMarkRounded: <QuestionMarkRoundedIcon color={iconColor} />,
    search: <SearchIcon color={iconColor} />,
    square: <SquareIcon color={iconColor} />,
    transaction: <TransactionIcon color={iconColor} />,
    closeEye: <CloseEyeIcon color={iconColor} />,
    openEye: <OpenEyeIconIcon color={iconColor} />,
    closeDrawerMobile: <CloseDrawerMobileIcon color={iconColor} />,
    openDrawerMobile: <OpenDrawerMobileIcon color={iconColor} />,
    pen: <PenIcon color={iconColor} />,
    trash: <TrashIcon color={iconColor} />,
  };

  return (
    <WrapperIcon data-testid="icon" size={size}>
      {getIcon[icon]}
    </WrapperIcon>
  );
};
