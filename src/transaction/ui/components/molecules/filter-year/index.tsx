import React, { ReactElement, useMemo } from 'react';
import { FilterCard } from '@/transaction/ui/components/atoms';
import { getListOfYears } from './data';

export const FilterYear = (): ReactElement => {
  const handleChangeSlider = (index): void => {
    // TODO
  };

  const slideStarter = useMemo(
    () => getListOfYears().findIndex(item => item.id === new Date().getFullYear().toString()),
    []
  );

  return <FilterCard items={getListOfYears()} slideStarter={slideStarter} onChangeSlider={handleChangeSlider} />;
};
