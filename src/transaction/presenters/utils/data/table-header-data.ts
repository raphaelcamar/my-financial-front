type TableHeadProps = {
  sorteable?: boolean;
  title: string;
  onClick?: () => void;
};

export const tableHeaderData: TableHeadProps[] = [
  {
    title: 'Tópico',
    sorteable: true,
  },
  {
    title: 'Anotação',
    sorteable: true,
  },
  {
    title: 'Data',
    sorteable: true,
  },
  {
    title: 'Tipo',
    sorteable: true,
  },
  {
    title: 'Valor',
    sorteable: true,
  },
  {
    title: 'Total',
    sorteable: true,
  },
];
