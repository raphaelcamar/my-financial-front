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
    icon: 'person',
    title: 'Perfil',
    accordionItems: [
      {
        icon: 'wallet',
        path: '/minha-carteira',
        title: 'Minha carteira',
      },

      {
        icon: 'person',
        path: '/informacoes-pessoais',
        title: 'Meus dados',
      },
    ],
  },
];
