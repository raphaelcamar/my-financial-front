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
  // {
  //   isAccordion: true,
  //   icon: 'transation',
  //   path: '/transacoes',
  //   title: 'accordion',
  //   accordionItems: [
  //     {
  //       icon: 'person',
  //       path: '/transacoes',
  //       title: 'minha conta',
  //     },
  //   ],
  // },
];
