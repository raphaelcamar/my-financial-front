/* eslint-disable no-return-await */
import React from 'react';

const AddIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/add-icon'));
const ArrowDownIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/arrow-down-icon'));
const BellBallIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/bell-ball-icon'));
const BellIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/bell-icon'));
const CircleIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/circle-icon'));
const CloseIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/close-icon'));
const DashboardIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/dashboard-icon'));
const FilterIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/filter-icon'));
const GoogleIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/google-icon'));
const KeyIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/key-icon'));
const LineArrowDownIcon = React.lazy(
  async () => await import('@/core/ui/components/atoms/icon/icons/line-arrow-down-icon')
);
const LineArrowUpIcon = React.lazy(
  async () => await import('@/core/ui/components/atoms/icon/icons/line-arrow-up-icon')
);
const CloseEyeIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/close-eye-icon'));
const OpenEyeIconIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/open-eye-icon'));
const LogoNewIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/logo-new-icon'));
const LogoSmallIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/logo-small-icon'));
const MailIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/mail-icon'));
const MiniArrowDownIcon = React.lazy(
  async () => await import('@/core/ui/components/atoms/icon/icons/mini-arrow-down-icon')
);
const MiniArrowUpIcon = React.lazy(
  async () => await import('@/core/ui/components/atoms/icon/icons/mini-arrow-up-icon')
);
const PersonIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/person-icon'));
const QuestionMarkRoundedIcon = React.lazy(
  async () => await import('@/core/ui/components/atoms/icon/icons/question-mark-rounded-icon')
);
const SearchIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/search-icon'));
const SquareIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/square-icon'));
const TransactionIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/transaction-icon'));
const CloseDrawerMobileIcon = React.lazy(
  async () => await import('@/core/ui/components/atoms/icon/icons/close-drawer-mobile-icon')
);
const OpenDrawerMobileIcon = React.lazy(
  async () => await import('@/core/ui/components/atoms/icon/icons/open-drawer-mobile-icon')
);
const PenIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/pen-icon'));
const TrashIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/trash-icon'));
const RecurrencyValueIcon = React.lazy(
  async () => await import('@/core/ui/components/atoms/icon/icons/recurrency-value-icon')
);
const ArrowLimitIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/arrow-limit-icon'));
const MoneyBagIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/money-bag-icon'));
const BalanceIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/balance-icon'));
const WalletIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/wallet-icon'));
const LogoutIcon = React.lazy(async () => await import('@/core/ui/components/atoms/icon/icons/logout-icon'));

export const getIcon = {
  add: AddIcon,
  arrowDown: ArrowDownIcon,
  arrowLimit: ArrowLimitIcon,
  balance: BalanceIcon,
  bell: BellIcon,
  bellBall: BellBallIcon,
  circle: CircleIcon,
  close: CloseIcon,
  closeDrawerMobile: CloseDrawerMobileIcon,
  closeEye: CloseEyeIcon,
  dashboard: DashboardIcon,
  filter: FilterIcon,
  google: GoogleIcon,
  key: KeyIcon,
  lineArrowDown: LineArrowDownIcon,
  lineArrowUp: LineArrowUpIcon,
  logo: LogoNewIcon,
  logoSmall: LogoSmallIcon,
  mail: MailIcon,
  miniArrowDown: MiniArrowDownIcon,
  miniArrowUp: MiniArrowUpIcon,
  moneyBag: MoneyBagIcon,
  openDrawerMobile: OpenDrawerMobileIcon,
  openEye: OpenEyeIconIcon,
  pen: PenIcon,
  person: PersonIcon,
  questionMarkRounded: QuestionMarkRoundedIcon,
  recurrencyValue: RecurrencyValueIcon,
  search: SearchIcon,
  square: SquareIcon,
  transaction: TransactionIcon,
  trash: TrashIcon,
  logout: LogoutIcon,
  wallet: WalletIcon,
};
