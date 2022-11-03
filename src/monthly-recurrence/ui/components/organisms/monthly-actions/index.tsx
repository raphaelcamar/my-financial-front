import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/core/ui/components/molecules';
import { Container, Form } from './styles';
import { DatePicker, Modal } from '@/core/ui/components/atoms';
import { ViewOptions } from '@/monthly-recurrence/ui/components/molecules';
import { MonthlyRecurrence } from '@/monthly-recurrence/domain/entities/monthly-recurrence';

export const MonthlyActions: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   resetField,
  //   reset,
  //   formState: { errors },
  // } = useForm<MonthlyRecurrence.Data>({ resolver: yupResolver({}) });

  return (
    <Container>
      <ViewOptions setModal={setModal} />
      <Modal open={modal} title="Adicionar Recorrência" closeModal={() => setModal(false)}>
        <Form>
          <DatePicker customInput={<Input label="Data de início" />} onChange={() => null} />
          <DatePicker customInput={<Input label="Data fim" />} onChange={() => null} />
          <Input label="Nome" />
          <Input label="Descrição" />
          <Input label="Valor" />
          <Input label="Tag" />
        </Form>
      </Modal>
    </Container>
  );
};
