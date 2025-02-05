import React, { ReactElement, useState } from 'react';
import { useSnackbar } from 'notistack';
import { FilterContainer } from './styles';
import { SaveBar } from '@/core/ui/components/organisms';
import { useAccessContext } from '@/user/presenters';
import { FilterCard } from '../../atoms';
import { getListOfMonths, getListOfYears } from './data';
import { monthStartDate } from '@/core/utils';
import { Transaction } from '@/transaction/domain';
import { useSpentsAndRevenuesContext } from '@/transaction/presenters/contexts/spents-and-revenues/context';

type InitialValuesProps = {
  month: number;
  year: number;
};

export const Filter = (): ReactElement => {
  const { getTransactions, setFilter, filter } = useSpentsAndRevenuesContext();
  const { currentWallet } = useAccessContext();

  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const [initialValues, setInitialValues] = useState<InitialValuesProps>({
    month: getListOfMonths().findIndex(item => item.id === new Date().getMonth().toString()),
    year: getListOfYears().findIndex(item => item.id === new Date().getFullYear().toString()),
  });

  const setFiltersToInitialState = () => {
    setInitialValues({
      month: getListOfMonths().findIndex(item => item.id === new Date().getMonth().toString()),
      year: getListOfYears().findIndex(item => item.id === new Date().getFullYear().toString()),
    });
  };

  const undoChanges = () => {
    setHasChanges(false);

    setFiltersToInitialState();
  };

  const formatFilterToSend = (): Transaction.Filter => {
    const year = getListOfYears()[initialValues.year].id;
    const start = monthStartDate(new Date(Number(year), initialValues.month));

    const limit = new Date(Number(year), initialValues.month + 1, 0);
    const newFilter: Transaction.Filter = { ...filter, limit, start };

    return newFilter;
  };

  const fetchTransactionsByFilter = async (): Promise<void> => {
    try {
      setLoading(true);
      setFilter(formatFilterToSend());
      await getTransactions(currentWallet.id, formatFilterToSend(), 1);

      setHasChanges(false);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível aplicar o filtro.', { variant: 'error' });
      setFiltersToInitialState();
    } finally {
      setLoading(false);
    }
  };

  const handleChangeFilter = (sliderIndex: number, type: 'month' | 'year') => {
    setInitialValues({
      ...initialValues,
      [type]: sliderIndex,
    });
    setHasChanges(true);
  };

  return (
    <>
      <FilterContainer>
        <FilterCard
          items={getListOfMonths()}
          slideStarter={initialValues.month}
          onChangeSlider={sliderIndex => handleChangeFilter(sliderIndex, 'month')}
        />
        <FilterCard
          items={getListOfYears()}
          slideStarter={initialValues.year}
          onChangeSlider={sliderIndex => handleChangeFilter(sliderIndex, 'year')}
        />
      </FilterContainer>
      <SaveBar
        isOpen={hasChanges}
        saveChanges={() => fetchTransactionsByFilter()}
        revertChanges={() => undoChanges()}
        loading={loading}
      />
    </>
  );
};
