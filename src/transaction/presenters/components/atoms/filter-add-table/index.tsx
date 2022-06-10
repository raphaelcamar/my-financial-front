import React from 'react';
import { Button, IconButton } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';

interface IFilterAddTable {
  setOpenModal: () => void;
  buttonText: string;
}

export const FilterAddTable: React.FC<IFilterAddTable> = ({ setOpenModal, buttonText }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <Input placeholder="Pesquise por nome, tópico ou descrição" iconEnd="search" withoutValidator /> */}
      <div className={classes.filterSearch}>
        <div>
          <IconButton icon="filter" size="large" />
        </div>
        <div>
          <Button variant="fullfiled" size="large" type="submit" onClick={setOpenModal}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
