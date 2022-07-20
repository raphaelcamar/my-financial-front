import React from 'react';
import { Td, Tr, Typography } from '@/core/ui/components/atoms';
import { Chip, IconButton } from '@/core/ui/components/molecules';
import { TableData, TableHeadProps } from '@/core/ui/components/organisms';
import { formatCurrency, formatDateBR, formatTopic, formatType } from '@/core/utils';
import { WrapperActionTableButtons } from './styles';
import { Transaction } from '@/transaction/domain';
import { TextEllipsis } from '../card-statistic/styles';

interface ITableTransaction {
  tableHeaderData: TableHeadProps[];
  transactions: Transaction[];
  handleEdit: (transaction: Transaction) => void;
  handleDelete: (transaction: Transaction) => void;
}

export const TableTransaction: React.FC<ITableTransaction> = ({
  handleDelete,
  handleEdit,
  tableHeaderData,
  transactions,
}) => (
  <TableData dataTitles={tableHeaderData}>
    {transactions?.map(transaction => (
      <Tr>
        <Td>
          <Chip color="primary">{formatTopic(transaction?.topic) || '-'}</Chip>
        </Td>
        <Td>
          <TextEllipsis>
            <Typography size="small" color="grey" ellipsis>
              {transaction?.anotation}
            </Typography>
          </TextEllipsis>
        </Td>
        <Td width={20}>
          <Typography size="small" color="grey">
            {transaction?.billedAt ? formatDateBR(String(transaction?.billedAt)) : '-'}
          </Typography>
        </Td>
        <Td>
          <Chip color={transaction?.type === 'ENTRANCE' ? 'success' : 'error'}>
            {formatType(transaction?.type) || '-'}
          </Chip>
        </Td>
        <Td>
          <Typography size="small" color="grey">
            {formatCurrency(transaction?.cost) || '-'}
          </Typography>
        </Td>
        <Td>
          <WrapperActionTableButtons>
            <IconButton
              onClick={() => handleEdit(transaction)}
              icon="pen"
              color="warning"
              shade="400"
              padding={[8, 9]}
              iconProps={{ color: 'grey', shade: '50', size: 10 }}
            />
            <IconButton
              onClick={() => handleDelete(transaction)}
              icon="trash"
              color="error"
              shade="500"
              padding={[8, 9]}
              iconProps={{ color: 'grey', shade: '50', size: 10 }}
            />
          </WrapperActionTableButtons>
        </Td>
      </Tr>
    ))}
  </TableData>
);
