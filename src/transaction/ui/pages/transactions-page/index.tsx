import React from 'react';
import { FirstLine, SecondLine, Space, Container } from './styles';
import { TableContainer } from '@/transaction/ui/components/organisms';

export const TransactionsPage: React.FC = () => (
  <Container>
    <FirstLine>
      {/* <div>Total de gastos recorrentes</div> */}
      {/* <div>Maior gasto do mês</div> */}
      {/* <div>Média de gasto do mês</div> */}
      {/* <div>Média mensal</div> */}
    </FirstLine>
    <SecondLine>
      <Space>
        <TableContainer />
      </Space>
      <div>Últimas movimentações</div>
    </SecondLine>
  </Container>
);
