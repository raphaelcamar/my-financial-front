import React, { useState } from 'react';
import { FirstLine, SecondLine, Space, Container } from './styles';
import { TableContainer, DrawerAddTransaction } from '@/transaction/presenters/components/organisms';

import { FilterAddTable } from '@/transaction/presenters/components/atoms';

export const TransactionsPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
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
          <DrawerAddTransaction openModal={openModal} setOpenModal={setOpenModal} />
          <TableContainer />
        </Space>
        <div>Últimas movimentações</div>
      </SecondLine>
    </Container>
  );
};
