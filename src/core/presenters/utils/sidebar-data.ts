import { ISidebaroption } from '@/core/domain';

export const SidebarData: ISidebaroption[] = [
  // {
  //   isAccordion: false,
  //   icon: 'asdas',
  //   title: 'Visão geral',
  //   path: '/',
  // },
  {
    isAccordion: false,
    icon: 'transaction',
    path: '/transacoes',
    title: 'Transações',
  },
  {
    isAccordion: true,
    icon: 'add',
    title: 'accordion',
    accordionItems: [
      {
        icon: 'trash',
        path: '/teste',
        title: 'minha conta',
      },

      {
        icon: 'pen',
        path: '/teste-2',
        title: 'minha conta',
      },
    ],
  },
];
