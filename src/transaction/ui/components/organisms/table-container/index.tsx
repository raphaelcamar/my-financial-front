/* eslint-disable no-return-await */
/* eslint-disable no-promise-executor-return */
import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { monthStartDate } from '@/core/utils';
import { Container } from './styles';
import { EmptyState, WrapperLoader } from '@/core/ui/components/molecules';

import { useTransactionContext } from '@/transaction/presenters/contexts';

import { tableHeaderData } from '@/transaction/utils/data';
import { ModalDeleteTransaction, TableActions } from '@/transaction/ui/components/atoms';
import { Transaction } from '@/transaction/domain';
import { TableTransaction, DrawerTransaction } from '@/transaction/ui/components/molecules';

export const TableContainer: React.FC = () => {
  const { getTransactions, deleteTransaction, transactions, transactionLoader } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [typeForm, setTypeForm] = useState<'create' | 'update'>('create');
  const [updateData, setUpdateData] = useState<Transaction>(null);

  const handleEdit = (transaction: Transaction) => {
    setTypeForm('update');
    setUpdateData(transaction);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setUpdateData(null);
  };

  const [deleteData, setDeleteData] = useState<Transaction.Data>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getTransactionsActualDate = async () => {
    const start = monthStartDate(new Date());
    const limit = new Date();
    const filter: Transaction.Filter = { limit, start };

    await getTransactions(filter);
  };

  useEffect(() => {
    getTransactionsActualDate();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await deleteTransaction(deleteData?._id);

      enqueueSnackbar('Transação deletada com sucesso!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível excluir a transação. Tente novamente depois', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
      setDeleteData(null);
    }
  };

  return (
    <>
      <TableActions setOpenModal={() => setOpenModal(true)} buttonText="adicionar" />
      <DrawerTransaction
        type={typeForm}
        openModal={openModal}
        setOpenModal={() => closeModal()}
        defaultValues={updateData}
      />
      <WrapperLoader loading={transactionLoader} size={15} color="primary">
        <ModalDeleteTransaction
          loading={loading}
          data={deleteData}
          openModal={!!deleteData}
          onClose={() => setDeleteData(null)}
          onSubmit={() => handleSubmit()}
        />
        {transactions?.length <= 0 && !transactionLoader ? (
          <>
            <EmptyState message="Você não possui transações com esse filtro!" />
          </>
        ) : (
          <Container>
            <TableTransaction
              handleDelete={setDeleteData}
              handleEdit={handleEdit}
              tableHeaderData={tableHeaderData}
              transactions={transactions}
            />
          </Container>
        )}
      </WrapperLoader>
    </>
  );
};
