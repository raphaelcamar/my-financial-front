import React, { ReactElement, useState } from 'react';
import { Icon, TextEllipsis, Typography } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules';
import { FirstRow, IconIndicator, Row, WrapperActionTableButtons } from './styles';
import { Transaction } from '@/transaction/domain';
import { LineFlag, ModalDeleteTransaction } from '@/transaction/ui/components/atoms';

type ITableRow = {
  transaction?: Transaction;
  handleEdit: (transaction: Transaction) => Promise<void>;
  handleDelete: (transaction: Transaction) => Promise<void>;
};
export const TableRow = ({ transaction, handleDelete, handleEdit }: ITableRow): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Row>
      <FirstRow>
        <LineFlag color="brown" />
        <IconIndicator>
          <Icon icon="wallet" color="grey" shade="50" size={16} />
        </IconIndicator>
      </FirstRow>

      <Typography type="p">
        <TextEllipsis>Observação da transação que foi cadastrada logo há menos </TextEllipsis>
      </Typography>

      <Typography type="p" color="success">
        Concluído
      </Typography>
      <Typography type="p">Saúde</Typography>

      <Typography type="p">R$ 510,30</Typography>

      <WrapperActionTableButtons>
        <IconButton
          onClick={() => handleEdit(transaction)}
          icon="pen"
          color="grey"
          shade="200"
          padding={[9, 9]}
          iconProps={{ color: 'primary', shade: '500', size: 12 }}
        />
        <IconButton
          onClick={() => setOpenModal(true)}
          icon="trash"
          color="grey"
          shade="200"
          padding={[9, 9]}
          iconProps={{ color: 'primary', shade: '500', size: 12 }}
        />
      </WrapperActionTableButtons>
      <ModalDeleteTransaction
        loading={loading}
        data={transaction}
        openModal={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={() => handleEdit(transaction)}
      />
    </Row>
  );
};
