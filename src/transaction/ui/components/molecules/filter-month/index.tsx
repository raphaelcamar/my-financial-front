import React, { ReactElement, useMemo } from 'react';
import { getListOfMonths } from './data';
import { FilterCard } from '@/transaction/ui/components/atoms';

export const FilterMonth = (): ReactElement => {
  const handleChangeSlider = (index): void => {
    // TODO
  };

  const slideStarter = useMemo(
    () => getListOfMonths().findIndex(item => item.id === new Date().getMonth().toString()),
    []
  );

  return <FilterCard items={getListOfMonths()} slideStarter={slideStarter} onChangeSlider={handleChangeSlider} />;
};
