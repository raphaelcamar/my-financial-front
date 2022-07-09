import React, { useState } from 'react';
import { FirstLine, SecondLine, Space, Container } from './styles';
import { TableContainer, DrawerAddTransaction } from '@/transaction/presenters/components/organisms';

import { FilterAddTable } from '@/transaction/presenters/components/atoms';
import { Transaction } from '@/transaction/domain';

export const TransactionsPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [typeForm, setTypeForm] = useState<'create' | 'update'>('create');
  const [updateData, setUpdateData] = useState<Transaction>(null);

  const handleEdit = (transaction: Transaction) => {
    setTypeForm('update');
    setUpdateData(transaction);
    setOpenModal(true);
  };

  return (
    <Container>
      <FirstLine>
        {/* <div>Total de gastos recorrentes</div> */}
        {/* <div>Maior gasto do mês</div> */}
        {/* <div>Média de gasto do mês</div> */}
        {/* <div>Média mensal</div> */}
      </FirstLine>
      <SecondLine>
        <Space>
          <FilterAddTable setOpenModal={() => setOpenModal(true)} buttonText="adicionar" />
          <DrawerAddTransaction
            type={typeForm}
            openModal={openModal}
            setOpenModal={setOpenModal}
            defaultValues={updateData}
          />
          <TableContainer handleEdit={transaction => handleEdit(transaction)} />
        </Space>
        <div>Últimas movimentações</div>
      </SecondLine>
    </Container>
  );
};
