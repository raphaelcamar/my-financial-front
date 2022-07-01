import React, { useEffect, useState } from 'react';
import { getMonth } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { Button, IconButton, ISelectOption, Select } from '@/core/presenters/components/molecules';
import { Container, FilterSearch } from './styles';
import { getMonthByIndex, filterTableData } from '@/transaction/presenters/utils/data';
import { useTransactionContext } from '@/transaction/presenters/contexts';

interface IFilterAddTable {
  setOpenModal: () => void;
  buttonText: string;
}

export const FilterAddTable: React.FC<IFilterAddTable> = ({ setOpenModal, buttonText }) => {
  const { setValue, watch, reset } = useForm();

  const { getTransactions } = useTransactionContext();
  const { enqueueSnackbar } = useSnackbar();
  const [selectValue, setSelectValue] = useState<number>(null);

  const month = getMonth(new Date());
  const currentMonth = getMonthByIndex(month);

  const defaultValue = {
    value: String(currentMonth.index),
    text: String(currentMonth.month),
  };

  useEffect(() => {
    reset({ filterMonth: defaultValue });
  }, []);

  const getTransactionByMonth = async () => {
    try {
      await getTransactions(selectValue);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu alguma coisa. Tente novamente depois', { variant: 'error' });
    }
  };

  useEffect(() => {
    getTransactionByMonth();
  }, [selectValue]);

  useEffect(() => {
    const filter = watch('filterMonth')?.value;
    if (filter !== selectValue) setSelectValue(filter);
  }, [watch('filterMonth')]);

  return (
    <Container>
      <Select
        label="Filtre pelo mês"
        items={filterTableData(month)}
        name="filterMonth"
        defaultValue={defaultValue as ISelectOption}
        setValue={setValue}
        value={watch('filterMonth')}
      />
      <FilterSearch>
        <div>
          <IconButton
            icon="filter"
            color="grey"
            shade="50"
            iconProps={{
              color: 'primary',
              shade: 'main',
            }}
            onClick={() => null}
          />
        </div>
        <div>
          <Button variant="primary" type="submit" onClick={setOpenModal}>
            {buttonText}
          </Button>
        </div>
      </FilterSearch>
    </Container>
  );
};
