import React, { ReactElement, useState } from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import { BodyTable, Container, HeaderTable, THead, WrapperBody } from './styles';
import { Hide, Tbody, Td, Typography } from '@/core/ui/components/atoms';
import { TableRow, AccordionTableRow } from '../../molecules';

export const TableTransactions = (): ReactElement => {
  const [transactions, setTransactions] = useState();

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
            <Typography weight={600} color="grey" shade={800}>
              Tipo
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Observação
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Status
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Tópico
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Valor
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Ações
            </Typography>
          </Td>
        </THead>
        <Tbody>
          <WrapperBody>
            <Hide breakpoint="sm" direction="down">
              <TableRow />
            </Hide>
            <Hide breakpoint="sm" direction="up">
              <AccordionTableRow />
            </Hide>
          </WrapperBody>
        </Tbody>
      </BodyTable>
    </Container>
  );
};
