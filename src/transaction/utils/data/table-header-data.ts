type TableHeadProps = {
  sorteable?: boolean;
  title: string;
  onClick?: () => void;
};

export const tableHeaderData: TableHeadProps[] = [
  {
    title: 'Tópico',
  },
  {
    title: 'Anotação',
  },
  {
    title: 'Data',
  },
  {
    title: 'Tipo',
  },
  {
    title: 'Valor',
  },
  {
    title: 'Ações',
  },
];
