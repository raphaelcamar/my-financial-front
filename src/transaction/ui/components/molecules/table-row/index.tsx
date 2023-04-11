import React, { ReactElement, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Icon, TextEllipsis, Typography } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules';
import { FirstRow, IconIndicator, Row, WrapperActionTableButtons } from './styles';
import { Transaction } from '@/transaction/domain';
import { LineFlag, ModalDeleteTransaction } from '@/transaction/ui/components/atoms';
import { ColorProps } from '@/main/styled';
import { formatCurrency, formatTopic } from '@/core/utils';
import { useAccessContext } from '@/user/presenters';
import { useTransactionContext } from '@/transaction/presenters/contexts';

type ITableRow = {
  transaction?: Transaction;
  handleEdit: (transaction: Transaction) => Promise<void>;
};
export const TableRow = ({ transaction, handleEdit }: ITableRow): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { currentWallet } = useAccessContext();
  const { deleteTransaction } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();

  const isFinished = transaction.status === 'FINISHED';

  const getColorFlagByType = (): keyof ColorProps => {
    if (transaction.type === 'ENTRANCE') return 'success';
    if (transaction.type === 'SPENT') return 'error';

    return 'info';
  };

  const fetchDeleteTransaction = async (): Promise<void> => {
    try {
      setLoading(true);
      await deleteTransaction(transaction._id, currentWallet.id);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível buscar as transações. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setOpenModal(false);
      setLoading(false);
    }
  };

  return (
    <Row>
      <FirstRow>
        <LineFlag color={getColorFlagByType()} />
        <IconIndicator>
          <Icon icon="wallet" color="grey" shade="50" size={16} />
        </IconIndicator>
      </FirstRow>

      <Typography type="p">
        <TextEllipsis>{transaction.anotation}</TextEllipsis>
      </Typography>

      <Typography type="p" color={isFinished ? 'success' : 'warning'}>
        {isFinished ? 'Finalizado' : 'Pendente'}
      </Typography>
      <Typography type="p">{formatTopic(transaction.topic)}</Typography>

      <Typography type="p">{formatCurrency(transaction.cost)}</Typography>

      <WrapperActionTableButtons>
        <IconButton
          onClick={() => handleEdit(transaction)}
          icon="pen"
          color="grey"
          shade="200"
          padding={[9, 9]}
          iconProps={{ color: 'primary', shade: '500', size: 12 }}
        />
        <IconButton
          onClick={() => setOpenModal(true)}
          icon="trash"
          color="grey"
          shade="200"
          padding={[9, 9]}
          iconProps={{ color: 'primary', shade: '500', size: 12 }}
        />
      </WrapperActionTableButtons>
      <ModalDeleteTransaction
        loading={loading}
        data={transaction}
        openModal={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={() => fetchDeleteTransaction()}
      />
    </Row>
  );
};
