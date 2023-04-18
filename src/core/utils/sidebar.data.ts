import { ISidebaroption } from '@/core/domain';
import { randomId } from './random-id';

export const SidebarData: ISidebaroption[] = [
  // {
  //   isAccordion: true,
  //   path: '/despesas-e-receitas',
  //   icon: 'transaction',
  //   title: 'Transações',
  //   id: randomId(),
  //   accordionItems: [
  //     {
  //       icon: 'transactionDashboard',
  //       path: '/despesas-e-receitas',
  //       title: 'Início',
  //       soon: false,
  //       id: randomId(),
  //     },
  //     {
  //       icon: 'tag',
  //       path: '/tags',
  //       title: 'Tags',
  //       id: randomId(),
  //       // soon: true,
  //     },
  //     {
  //       icon: 'recurrence',
  //       path: '/recorrencias-mensais',
  //       title: 'Recorrência mensal',
  //       id: randomId(),
  //     },
  //   ],
  // },
  {
    path: '/despesas-e-receitas',
    icon: 'transaction',
    title: 'Depesas e receitas',
    id: randomId(),
  },
];
