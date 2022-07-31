import React from 'react';
import { Modal, Typography } from '@/core/ui/components/atoms';
import { ActionButtons, StyledButton, Wrapper, Information } from './styles';
import { Transaction } from '@/transaction/domain';
import { Chip } from '@/core/ui/components/molecules';
import { formatCurrency, formatDateBR, formatType } from '@/core/utils';

interface IModalDeleteTransaction {
  onClose: (data?: any) => void;
  openModal: boolean;
  data: Transaction.Data;
  onSubmit: () => void;
  loading: boolean;
}

export const ModalDeleteTransaction: React.FC<IModalDeleteTransaction> = ({
  onClose,
  onSubmit,
  openModal,
  data,
  loading,
}) => (
  <Modal closeModal={onClose} open={openModal} title="Deseja excluir a transação?">
    <Wrapper>
      <Information>
        <Typography color="default" weight={500} size="normal">
          {data?.anotation}
        </Typography>
        <Typography color="grey" weight={200}>
          {data?.billedAt ? formatDateBR(String(data?.billedAt)) : '-'}
        </Typography>
        <Chip color={data?.type === 'ENTRANCE' ? 'success' : 'error'}>{formatType(data?.type) || '-'}</Chip>
      </Information>
      <Typography weight={500} size="xlarge" color={data?.type === 'ENTRANCE' ? 'success' : 'error'}>
        {formatCurrency(data?.cost) || '-'}
      </Typography>
    </Wrapper>
    <ActionButtons>
      <StyledButton styleType="outlined" variant="grey" onClick={onClose}>
        Cancelar
      </StyledButton>
      <StyledButton loading={loading} styleType="fullfiled" variant="error" onClick={onSubmit}>
        Excluir
      </StyledButton>
    </ActionButtons>
  </Modal>
);
