import React from 'react';
import { Button, IconButton } from '@/core/presenters/components/molecules';
import { Container, FilterSearch } from './styles';

interface IFilterAddTable {
  setOpenModal: () => void;
  buttonText: string;
}

export const FilterAddTable: React.FC<IFilterAddTable> = ({ setOpenModal, buttonText }) => (
  <Container>
    {/* <Input placeholder="Pesquise por nome, tópico ou descrição" iconEnd="search" withoutValidator /> */}
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
