import React, { ReactElement, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Icon, TextEllipsis, Typography } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules';
import { FirstRow, IconIndicator, Row, WrapperActionTableButtons } from './styles';
import { Transaction } from '@/transaction/domain';
import { LineFlag, ModalDeleteTransaction, ModalEditTransaction } from '@/transaction/ui/components/atoms';
import { ColorProps } from '@/main/styled';
import { formatCurrency, formatDate, formatTopic } from '@/core/utils';
import { useAccessContext } from '@/user/presenters';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';
import { formatPaymentType } from '@/transaction/utils';

type ITableRow = {
  transaction?: Transaction;
};

export const TableRow = ({ transaction }: ITableRow): ReactElement => {
  const [loading, setLoading] = useState<'edit' | 'delete' | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const { currentWallet, setNewWalletValue } = useAccessContext();
  const { deleteTransaction, updateTransaction } = useSpentsAndRevenuesContext();
  const { enqueueSnackbar } = useSnackbar();

  const getColorFlagByType = (): keyof ColorProps => {
    if (transaction.type === 'ENTRANCE') return 'success';
    if (transaction.type === 'SPENT') return 'error';

    return 'info';
  };

  const fetchDeleteTransaction = async (): Promise<void> => {
    try {
      setLoading('delete');
      const { newWalletValue } = await deleteTransaction(transaction, currentWallet.id);
      setNewWalletValue(newWalletValue);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível buscar as transações. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setOpenModal(false);
      setLoading(null);
    }
  };

  const fetchEditTransaction = async (data: Transaction.Data): Promise<void> => {
    try {
      setLoading('edit');
      const { newWalletValue } = await updateTransaction(data, currentWallet.id);
      setNewWalletValue(newWalletValue);

      enqueueSnackbar('Transação alterada!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível buscar as transações. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setOpenEditModal(false);
      setLoading(null);
    }
  };

  return (
    <>
      <Row open={openEditModal || !!openModal}>
        <FirstRow>
          <LineFlag color={getColorFlagByType()} />
          <IconIndicator>
            <Icon icon="wallet" color="grey" shade="50" size={16} />
          </IconIndicator>
        </FirstRow>
        <div>
          <TextEllipsis>
            <Typography type="p">{transaction.anotation}</Typography>
          </TextEllipsis>
          <Typography type="span" size="small" color="grey" shade={400}>
            {formatPaymentType(transaction.paymentType)}
          </Typography>
        </div>

        <Typography type="p" color="grey" shade={400} weight={500}>
          {formatDate(transaction.billedAt)}
        </Typography>
        <Typography type="p">{formatTopic(transaction.topic)}</Typography>

        <Typography type="p">{formatCurrency(transaction.cost)}</Typography>

        <WrapperActionTableButtons>
          <IconButton
            onClick={() => setOpenEditModal(!openEditModal)}
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
      </Row>
      {openModal ? (
        <ModalDeleteTransaction
          loading={loading === 'delete'}
          data={transaction}
          openModal={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={() => fetchDeleteTransaction()}
        />
      ) : (
        <></>
      )}
      {openEditModal ? (
        <ModalEditTransaction
          open={openEditModal}
          setOpen={setOpenEditModal}
          transaction={transaction}
          onSubmit={fetchEditTransaction}
          loading={loading === 'edit'}
        />
      ) : (
        <></>
      )}
    </>
  );
};
