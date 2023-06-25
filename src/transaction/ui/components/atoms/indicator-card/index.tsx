import React, { ReactElement, ReactNode, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Icon, InputBase, Typography } from '@/core/ui/components/atoms';
import { Container, Footer, Header, PercentIndicator, Spacer } from './styles';
import { MoreOptions } from '@/core/ui/components/organisms';
import { formatCurrency } from '@/core/utils';

export type IIndicatorCard = {
  type: 'SPENT' | 'ENTRANCE';
  description: ReactNode;
  value: number;
  date: Date;
  percentage: number;
};

export const IndicatorCard = ({ date, description, percentage, type, value }: IIndicatorCard): ReactElement => {
  const [showMoney, setShowMoney] = useState<boolean>(true);

  return (
    <Container type={type}>
      <Spacer>
        <Header>
          <Typography color="grey" type="p" weight={500}>
            {type === 'ENTRANCE' ? 'Entradas' : 'Saídas'}
          </Typography>

          <MoreOptions
            items={[
              { text: 'Mostrar', icon: 'openEye', onClick: () => setShowMoney(true), selected: showMoney },
              { text: 'Ocultar', icon: 'closeEye', onClick: () => setShowMoney(false), selected: !showMoney },
            ]}
            closeOnSelectIitem
          />
        </Header>
        <Typography color="grey" shade={900} weight={700} size="xlarge">
          <InputBase
            value={formatCurrency(value || 0)}
            type={showMoney ? 'text' : 'password'}
            readOnly
            aria-label={`Valor total de ${type === 'ENTRANCE' ? 'Entradas' : 'Saídas'}`}
          />
        </Typography>
        {description || '-'}
      </Spacer>
      <Footer>
        <Typography color="grey" shade={400} size="xsmall">
          {format(date || new Date(), 'MMMM / yyyy', { locale: ptBR })}
        </Typography>
        <PercentIndicator>
          <Typography color="success" shade={500} size="xsmall" weight={700}>{`${percentage || 0}%`}</Typography>
          <Icon icon="miniArrowDown" color="success" shade="500" />
        </PercentIndicator>
      </Footer>
    </Container>
  );
};
