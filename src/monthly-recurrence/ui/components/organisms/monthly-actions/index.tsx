import React, { useState } from 'react';
import { Button, IconButton, Input } from '@/core/ui/components/molecules';
import { Container } from './styles';
import { DatePicker, Modal } from '@/core/ui/components/atoms';

export const MonthlyActions: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <Container>
      <Button styleType="glass" shade={200} variant="primary">
        Todos
      </Button>
      <Button styleType="glass" variant="grey">
        Cartão
      </Button>
      <Button styleType="glass" variant="grey">
        Assinaturas
      </Button>
      <IconButton
        onClick={() => null}
        icon="squareView"
        color="grey"
        shade="50"
        padding={[8, 14]}
        iconProps={{ color: 'primary', shade: '400' }}
      />
      <IconButton
        onClick={() => null}
        icon="barView"
        color="grey"
        shade="50"
        padding={[8, 14]}
        iconProps={{ color: 'grey', shade: '400' }}
      />
      <Button onClick={() => setModal(true)} styleType="fullfiled" variant="primary">
        Adicionar
      </Button>
      <Modal open={modal} title="Adicionar Recorrência" closeModal={() => setModal(false)}>
        <DatePicker customInput={<Input label="Data de início" />} onChange={() => null} />
        <DatePicker customInput={<Input label="Data fim" />} onChange={() => null} />
        <Input label="Nome" />
        <Input label="Descrição" />
        <Input label="Valor" />
        <Input label="Tag" />
      </Modal>
    </Container>
  );
};
