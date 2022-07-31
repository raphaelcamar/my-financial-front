import React from 'react';
import { SecondLine, Space, Container } from './styles';
import { Statistics, TableContainer } from '@/transaction/ui/components/organisms';
import { TransactionProvider } from '@/transaction/presenters/contexts';

export const TransactionsPage: React.FC = () => (
  <TransactionProvider>
    <Container>
      <Statistics />
      <SecondLine>
        <Space>
          <TableContainer />
        </Space>
        <div>Últimas movimentações</div>
      </SecondLine>
    </Container>
  </TransactionProvider>
);

export default TransactionsPage;
