import React, { ReactElement, useState } from 'react';
import { Transaction } from '@/transaction/domain';
import { AccordionRow, Children, FirstRow, IconIndicator, WrapperAccordion, WrapperActionTableButtons } from './styles';
import { LineFlag } from '@/transaction/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules';
import { Icon, TextEllipsis, Typography } from '@/core/ui/components/atoms';

type IAccordionTableRow = {
  transaction?: Transaction;
};

export const AccordionTableRow = ({ transaction }: IAccordionTableRow): ReactElement => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  return (
    <WrapperAccordion onClick={() => setOpenAccordion(!openAccordion)}>
      <FirstRow>
        <LineFlag color="error" />
        <div>
          <IconIndicator>
            <Icon icon="wallet" color="grey" shade="50" size={16} />
          </IconIndicator>
        </div>
        <Typography type="p">
          <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
        </Typography>
      </FirstRow>
      <Children open={openAccordion}>
        <AccordionRow>
          <Typography weight={700}>Status: </Typography>
          <Typography type="p" color="success">
            Concluído
          </Typography>
        </AccordionRow>

        <AccordionRow>
          <Typography weight={700}>Tópico: </Typography>
          <Typography type="p">Saúde</Typography>
        </AccordionRow>

        <AccordionRow>
          <Typography weight={700}>Valor: </Typography>
          <Typography type="p">R$ 510,30</Typography>
        </AccordionRow>

        <AccordionRow>
          <Typography weight={700}>Ações: </Typography>
          <WrapperActionTableButtons>
            <IconButton
              onClick={() => null}
              icon="pen"
              color="grey"
              shade="200"
              padding={[9, 9]}
              iconProps={{ color: 'primary', shade: '500', size: 12 }}
            />
            <IconButton
              onClick={() => null}
              icon="trash"
              color="grey"
              shade="200"
              padding={[9, 9]}
              iconProps={{ color: 'primary', shade: '500', size: 12 }}
            />
          </WrapperActionTableButtons>
        </AccordionRow>
      </Children>
    </WrapperAccordion>
  );
};
