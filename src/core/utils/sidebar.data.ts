import { ISidebaroption } from '@/core/domain';
import { randomId } from './random-id';

export const SidebarData: ISidebaroption[] = [
  {
    icon: 'transactionDashboard',
    path: '/',
    title: 'Início',
    soon: false,
    id: randomId(),
  },
  {
    isAccordion: true,
    icon: 'wallet',
    title: 'Carteira',
    id: randomId(),
    accordionItems: [
      {
        icon: 'wallet',
        path: '/carteira',
        title: 'Carteiras disponíveis',
        soon: false,
        id: randomId(),
      },
      {
        icon: 'dashboard',
        path: '/carteira/dashboard',
        title: 'Dashboards',
        id: randomId(),
        soon: false,
      },
    ],
  },
  {
    path: '/despesas-e-receitas',
    icon: 'transaction',
    title: 'Depesas e receitas',
    id: randomId(),
  },

  {
    icon: 'recurrence',
    path: '/recorrencias-mensais',
    title: 'Recorrências mensais',
    id: randomId(),
  },
];
