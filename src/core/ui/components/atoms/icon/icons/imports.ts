import React from 'react';

const AddIcon = React.lazy(
  async () => import(/* webpackChunkName: "add" */ '@/core/ui/components/atoms/icon/icons/add-icon')
);
const ArrowDownIcon = React.lazy(
  async () => import(/* webpackChunkName: "arrowDown" */ '@/core/ui/components/atoms/icon/icons/arrow-down-icon')
);
const ArrowLeftIcon = React.lazy(
  async () => import(/* webpackChunkName: "arrowLeft" */ '@/core/ui/components/atoms/icon/icons/arrow-left-icon')
);
const ArrowRightIcon = React.lazy(
  async () => import(/* webpackChunkName: "arrowRight" */ '@/core/ui/components/atoms/icon/icons/arrow-right-icon')
);
const ArrowLimitIcon = React.lazy(
  async () => import(/* webpackChunkName: "arrowLimit" */ '@/core/ui/components/atoms/icon/icons/arrow-limit-icon')
);
const BalanceIcon = React.lazy(
  async () => import(/* webpackChunkName: "balance" */ '@/core/ui/components/atoms/icon/icons/balance-icon')
);
const BellIcon = React.lazy(
  async () => import(/* webpackChunkName: "bell" */ '@/core/ui/components/atoms/icon/icons/bell-icon')
);
const CircleIcon = React.lazy(
  async () => import(/* webpackChunkName: "circle" */ '@/core/ui/components/atoms/icon/icons/circle-icon')
);
const CloseDrawerMobileIcon = React.lazy(
  async () =>
    import(/* webpackChunkName: "closeDrawerMobile" */ '@/core/ui/components/atoms/icon/icons/close-drawer-mobile-icon')
);
const CloseEyeIcon = React.lazy(
  async () => import(/* webpackChunkName: "closeEye" */ '@/core/ui/components/atoms/icon/icons/close-eye-icon')
);
const CloseIcon = React.lazy(
  async () => import(/* webpackChunkName: "close" */ '@/core/ui/components/atoms/icon/icons/close-icon')
);
const DashboardIcon = React.lazy(
  async () => import(/* webpackChunkName: "dashboard" */ '@/core/ui/components/atoms/icon/icons/dashboard-icon')
);
const EmptyStateIcon = React.lazy(
  async () => import(/* webpackChunkName: "emptyState" */ '@/core/ui/components/atoms/icon/icons/empty-state-icon')
);
const FilterBarIcon = React.lazy(
  async () => import(/* webpackChunkName: "filterBar" */ '@/core/ui/components/atoms/icon/icons/filter-bar-icon')
);
const FilterIcon = React.lazy(
  async () => import(/* webpackChunkName: "filter" */ '@/core/ui/components/atoms/icon/icons/filter-icon')
);
const GoogleIcon = React.lazy(
  async () => import(/* webpackChunkName: "google" */ '@/core/ui/components/atoms/icon/icons/google-icon')
);
const LineArrowDownIcon = React.lazy(
  async () =>
    import(/* webpackChunkName: "lineArrowDown" */ '@/core/ui/components/atoms/icon/icons/line-arrow-down-icon')
);
const LineArrowUpIcon = React.lazy(
  async () => import(/* webpackChunkName: "lineArrowup" */ '@/core/ui/components/atoms/icon/icons/line-arrow-up-icon')
);
const MailIcon = React.lazy(
  async () => import(/* webpackChunkName: "mail" */ '@/core/ui/components/atoms/icon/icons/mail-icon')
);
const MiniArrowDownIcon = React.lazy(
  async () =>
    import(/* webpackChunkName: "miniArrowDown" */ '@/core/ui/components/atoms/icon/icons/mini-arrow-down-icon')
);
const MiniArrowUpIcon = React.lazy(
  async () => import(/* webpackChunkName: "miniArrowup" */ '@/core/ui/components/atoms/icon/icons/mini-arrow-up-icon')
);
const MoneyBagIcon = React.lazy(
  async () => import(/* webpackChunkName: "moneyBag" */ '@/core/ui/components/atoms/icon/icons/money-bag-icon')
);
const MoreOptionIcon = React.lazy(
  async () => import(/* webpackChunkName: "moreOption" */ '@/core/ui/components/atoms/icon/icons/more-option-icon')
);
const OpenDrawerMobileIcon = React.lazy(
  async () =>
    import(/* webpackChunkName: "openDrawerMobile" */ '@/core/ui/components/atoms/icon/icons/open-drawer-mobile-icon')
);
const OpenEyeIcon = React.lazy(
  async () => import(/* webpackChunkName: "openEye" */ '@/core/ui/components/atoms/icon/icons/open-eye-icon')
);
const PenIcon = React.lazy(
  async () => import(/* webpackChunkName: "pen" */ '@/core/ui/components/atoms/icon/icons/pen-icon')
);
const QuestionMarkRoundedIcon = React.lazy(
  async () =>
    import(
      /* webpackChunkName: "questionMarkRounded" */ '@/core/ui/components/atoms/icon/icons/question-mark-rounded-icon'
    )
);
const RecurrenceIcon = React.lazy(
  async () => import(/* webpackChunkName: "recurrence" */ '@/core/ui/components/atoms/icon/icons/recurrence-icon')
);
const RecurrencyValueIcon = React.lazy(
  async () =>
    import(/* webpackChunkName: "recurrenceValue" */ '@/core/ui/components/atoms/icon/icons/recurrency-value-icon')
);
const SearchIcon = React.lazy(
  async () => import(/* webpackChunkName: "search" */ '@/core/ui/components/atoms/icon/icons/search-icon')
);
const SquareIcon = React.lazy(
  async () => import(/* webpackChunkName: "square" */ '@/core/ui/components/atoms/icon/icons/square-icon')
);
const SquareViewIcon = React.lazy(
  async () => import(/* webpackChunkName: "squareView" */ '@/core/ui/components/atoms/icon/icons/square-view-icon')
);
const TagIcon = React.lazy(
  async () => import(/* webpackChunkName: "tag" */ '@/core/ui/components/atoms/icon/icons/tag-icon')
);
const TransactionDashboardIcon = React.lazy(
  async () =>
    import(
      /* webpackChunkName: "transactionDashboard" */ '@/core/ui/components/atoms/icon/icons/transaction-dashboard-icon'
    )
);
const TransactionIcon = React.lazy(
  async () => import(/* webpackChunkName: "transaction" */ '@/core/ui/components/atoms/icon/icons/transaction-icon')
);
const TrashIcon = React.lazy(
  async () => import(/* webpackChunkName: "trash" */ '@/core/ui/components/atoms/icon/icons/trash-icon')
);
const WalletIcon = React.lazy(
  async () => import(/* webpackChunkName: "wallet" */ '@/core/ui/components/atoms/icon/icons/wallet-icon')
);
const InactiveTagIcon = React.lazy(
  async () => import(/* webpackChunkName: "inactiveTag" */ '@/core/ui/components/atoms/icon/icons/inactive-tag-icon')
);
const PhotoIcon = React.lazy(
  async () => import(/* webpackChunkName: "photo" */ '@/core/ui/components/atoms/icon/icons/photo-icon')
);

const KeyIcon = React.lazy(
  async () => import(/* webpackChunkName: "key" */ '@/core/ui/components/atoms/icon/icons/key-icon')
);
const PersonIcon = React.lazy(
  async () => import(/* webpackChunkName: "person" */ '@/core/ui/components/atoms/icon/icons/person-icon')
);
const BarViewIcon = React.lazy(
  async () => import(/* webpackChunkName: "barView" */ '@/core/ui/components/atoms/icon/icons/bar-view-icon')
);
const BellBallIcon = React.lazy(
  async () => import(/* webpackChunkName: "bellBall" */ '@/core/ui/components/atoms/icon/icons/bell-ball-icon')
);
const LogoNewIcon = React.lazy(
  async () => import(/* webpackChunkName: "logoNew" */ '@/core/ui/components/atoms/icon/icons/logo-new-icon')
);

const LogoutIcon = React.lazy(
  async () => import(/* webpackChunkName: "logout" */ '@/core/ui/components/atoms/icon/icons/logout-icon')
);

const MoneyIcon = React.lazy(
  async () => import(/* webpackChunkName: "logout" */ '@/core/ui/components/atoms/icon/icons/money-icon')
);

const MoneyCuttedIcon = React.lazy(
  async () => import(/* webpackChunkName: "logout" */ '@/core/ui/components/atoms/icon/icons/money-cutted-icon')
);
const CalendarIcon = React.lazy(
  async () => import(/* webpackChunkName: "logout" */ '@/core/ui/components/atoms/icon/icons/calendar-icon')
);

export const Icons = {
  add: AddIcon,
  arrowDown: ArrowDownIcon,
  arrowLimit: ArrowLimitIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  balance: BalanceIcon,
  barView: BarViewIcon,
  bell: BellIcon,
  bellBall: BellBallIcon,
  calendarIcon: CalendarIcon,
  circle: CircleIcon,
  close: CloseIcon,
  closeDrawerMobile: CloseDrawerMobileIcon,
  closeEye: CloseEyeIcon,
  dashboard: DashboardIcon,
  emptyState: EmptyStateIcon,
  filter: FilterIcon,
  filterBar: FilterBarIcon,
  google: GoogleIcon,
  inactiveTag: InactiveTagIcon,
  key: KeyIcon,
  lineArrowDown: LineArrowDownIcon,
  lineArrowUp: LineArrowUpIcon,
  logo: LogoNewIcon,
  logout: LogoutIcon,
  mail: MailIcon,
  miniArrowDown: MiniArrowDownIcon,
  miniArrowUp: MiniArrowUpIcon,
  money: MoneyIcon,
  moneyBag: MoneyBagIcon,
  moneyCutted: MoneyCuttedIcon,
  moreOption: MoreOptionIcon,
  openDrawerMobile: OpenDrawerMobileIcon,
  openEye: OpenEyeIcon,
  pen: PenIcon,
  person: PersonIcon,
  photo: PhotoIcon,
  questionMarkRounded: QuestionMarkRoundedIcon,
  recurrence: RecurrenceIcon,
  recurrencyValue: RecurrencyValueIcon,
  search: SearchIcon,
  square: SquareIcon,
  squareView: SquareViewIcon,
  tag: TagIcon,
  transaction: TransactionIcon,
  transactionDashboard: TransactionDashboardIcon,
  trash: TrashIcon,
  wallet: WalletIcon,
};
