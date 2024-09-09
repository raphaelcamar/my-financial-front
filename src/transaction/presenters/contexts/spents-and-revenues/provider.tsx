import React, { ReactElement, useReducer, useState } from 'react';
import { initialState, reducer } from './reducers';
import { SpentsAndRevenuesContext } from './context';
import {
  CloseMonth,
  CreateTransaction,
  DeleteTransaction,
  GetIndicators,
  GetTransactions,
  UpdateTransaction,
} from '@/transaction/data';
import { fetchDeleteTransaction, fetchFilterTransaction, fetchGetTransactions, fetchIndicators } from './actions';
import { Transaction } from '@/transaction/domain';
import { SpentsAndRevenuesRepositoryData } from '@/transaction/infra/http/spents-and-revenues-repository-data';
import { MonthlyClosingRepositoryData } from '@/transaction/infra/http/monthly-closing-repository-data';
import { Pagination } from '@/core/domain';

export const SpentsAndRevenuesProvider = ({ children }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const setFilter = (filter: Transaction.Filter): void => {
    dispatch(fetchFilterTransaction(filter));
  };

  const getTransactions = async (
    walletId: string,
    filter: Transaction.Filter,
    page?: number
  ): Promise<Pagination<Transaction[], 'transactions'>> => {
    setLoading(true);
    const spentsAndRevenuesRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new GetTransactions(spentsAndRevenuesRepository, walletId, filter, page);
    const paginatedTransactions = await useCase.execute();

    dispatch(fetchGetTransactions(paginatedTransactions.transactions));

    setFilter({
      ...filter,
      pagination: {
        currentPage: paginatedTransactions.currentPage,
        pageSize: paginatedTransactions.pageSize,
        totalPages: paginatedTransactions.totalPages,
      },
    });

    setLoading(false);

    return paginatedTransactions;
  };

  const deleteTransaction = async (transaction: Transaction, walletId: string): Promise<{ newWalletValue: number }> => {
    const spentsAndRevenuesRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new DeleteTransaction(spentsAndRevenuesRepository, transaction, walletId, state.transactions);
    const result = await useCase.execute();

    dispatch(fetchDeleteTransaction(result.transactions));

    return { newWalletValue: result.newWalletValue };
  };

  const getIndicators = async (walletId: string, filter: Transaction.Filter): Promise<void> => {
    const spentsAndRevenuesRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new GetIndicators(walletId, filter, spentsAndRevenuesRepository);

    const result = await useCase.execute();

    dispatch(fetchIndicators(result));
  };

  const createTransaction = async (transactionData: Transaction.Data): Promise<{ newWalletValue: number }> => {
    const transactionRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new CreateTransaction(transactionRepository, transactionData);
    const result = await useCase.execute();

    const getTransactionsUseCase = new GetTransactions(
      transactionRepository,
      transactionData.walletId,
      state.filter,
      1
    );

    const transactions = await getTransactionsUseCase.execute();

    dispatch(fetchGetTransactions(transactions.transactions));

    return { newWalletValue: result.newWalletValue };
  };

  const updateTransaction = async (transactionData: Transaction.Data): Promise<{ newWalletValue: number }> => {
    const transactionRepository = new SpentsAndRevenuesRepositoryData();

    const useCase = new UpdateTransaction(transactionRepository, transactionData);
    const result = await useCase.execute();

    const getTransactionsUseCase = new GetTransactions(
      transactionRepository,
      transactionData.walletId,
      state.filter,
      1
    );
    const transactions = await getTransactionsUseCase.execute();

    dispatch(fetchGetTransactions(transactions.transactions));
    return { newWalletValue: result };
  };

  const closeMonth = async (monthToClose: number, year: number, walletId: string): Promise<void> => {
    const monthlyCloseRepository = new MonthlyClosingRepositoryData();

    const useCase = new CloseMonth(monthlyCloseRepository, monthToClose, year, walletId);

    await useCase.execute();
  };

  return (
    <SpentsAndRevenuesContext.Provider
      value={{
        getTransactions,
        transactionLoader: loading,
        setTransactionLoader: setLoading,
        transactions: state.transactions,
        deleteTransaction,
        getIndicators,
        createTransaction,
        updateTransaction,
        setFilter,
        filter: state.filter,
        indicators: state.indicators,
        closeMonth,
      }}
    >
      {children}
    </SpentsAndRevenuesContext.Provider>
  );
};
