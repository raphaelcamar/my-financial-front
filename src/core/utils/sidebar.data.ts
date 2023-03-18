import { ISidebaroption } from '@/core/domain';

export const SidebarData: ISidebaroption[] = [
  {
    isAccordion: true,
    path: '/transacoes',
    icon: 'transaction',
    title: 'Transações',
    accordionItems: [
      {
        icon: 'transactionDashboard',
        path: '/transacoes',
        title: 'Início',
        soon: false,
      },
      {
        icon: 'tag',
        path: '/tags',
        title: 'Tags',
        // soon: true,
      },
      {
        icon: 'recurrence',
        path: '/recorrencias-mensais',
        title: 'Recorrência mensal',
      },
    ],
  },
  {
    path: '/despesas-e-receitas',
    icon: 'transaction',
    title: 'Depesas e receitas',
  },
];
