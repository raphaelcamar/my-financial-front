import React, { useState } from 'react';
import { useStyles } from './styles';
import { FilterAddTable } from '@/transaction/presenters/components/atoms';
import { DrawerAddTransaction } from '@/transaction/presenters/components/organisms';
import { TableData } from '@/core/presenters/components/organisms/table/table-data';
import { Chip, TableCell, TableRow, Typography } from '@/core/presenters/components/atoms';

const tableHead = [
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
    title: 'Total',
  },
];

export const TableContainer: React.FC = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className={classes.container}>
      <FilterAddTable setOpenModal={() => setOpenModal(true)} buttonText="adicionar" />
      <TableData dataTitles={tableHead}>
        <TableRow>
          <TableCell>
            <Chip color="success">
              <Typography variant="body1">Comida</Typography>
            </Chip>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Chip color="primary">
              <Typography variant="body1">Transporte</Typography>
            </Chip>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Chip color="primary">
              <Typography variant="body1">Saúde</Typography>
            </Chip>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body1">Teste</Typography>
          </TableCell>
        </TableRow>
      </TableData>

      <DrawerAddTransaction openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};
