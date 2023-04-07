import React, { ReactElement, useState } from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import { BodyTable, Container, HeaderTable, THead, WrapperBody } from './styles';
import { Hide, Tbody, Td, Typography } from '@/core/ui/components/atoms';
import { TableRow, AccordionTableRow } from '../../molecules';
import { Transaction } from '@/transaction/domain';

export const TableTransactions = (): ReactElement => {
  const [transactions, setTransactions] = useState();

  const handleEdit = async (transaction: Transaction): Promise<void> => {
    try {
      // TODO
    } catch (err) {
      // TODO
    }
  };

  const handleDelete = async (transaction: Transaction): Promise<void> => {
    try {
      // TODO
    } catch (err) {
      // TODO
    }
  };

  return (
    <Container>
      <HeaderTable>
        <Typography size="xlarge" weight={700}>
          Transações
        </Typography>
        <Button>Adicionar</Button>
      </HeaderTable>
      <BodyTable>
        <THead>
          <Td withoutLine>
            <Typography weight={600}>Tipo</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Observação</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Status</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Tópico</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Valor</Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600}>Ações</Typography>
          </Td>
        </THead>
        <Tbody>
          <Hide breakpoint="sm" direction="down">
            <WrapperBody>
              <TableRow handleEdit={handleEdit} handleDelete={handleDelete} />
            </WrapperBody>
          </Hide>
          <WrapperBody>
            <Hide breakpoint="sm" direction="up">
              <AccordionTableRow />
            </Hide>
          </WrapperBody>
        </Tbody>
      </BodyTable>
    </Container>
  );
};
