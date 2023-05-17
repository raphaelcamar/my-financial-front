import React, { ReactElement, forwardRef, useState } from 'react';
import { ClickAwayListener, InputBase } from '../../atoms';
import { Coin, Container, ContainerSelection, Option, Options } from './styles';

type ISelectableCoin = {
  coin?: string;
};

export const SelectableCoin = ({ coin }: ISelectableCoin): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Container open={open}>
        <Coin onClick={() => setOpen(!open)}>EUR</Coin>
        <Options open={open}>
          <Option>BR</Option>
          <Option>BR</Option>
          <Option>BR</Option>
          <Option>BR</Option>
          <Option>BR</Option>
          <Option>BR</Option>
        </Options>
      </Container>
    </ClickAwayListener>
  );
};
