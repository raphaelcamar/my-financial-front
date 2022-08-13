import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { Chip, IconButton } from '@/core/ui/components/molecules';
import { Title, Header, StyledPaper, Footer } from './styles';

export const MonthlyCard: React.FC = () => (
  <StyledPaper density={1}>
    <Header>
      <Title>
        <Typography size="xlarge" weight={700}>
          Netflix
        </Typography>
        <div>
          <Chip color="info">Streaming</Chip>
        </div>
      </Title>
      <IconButton icon="moreOption" color="grey" shade="50" noBackground />
    </Header>
    <Typography color="grey">Descrição da recorrência, caso precise</Typography>
    <Footer>
      <Typography shade={400} size="small" color="grey" type="span">
        Até 12/2022
      </Typography>
      <Typography color="success" weight={700}>
        R$ 35,00 / mês
      </Typography>
    </Footer>
  </StyledPaper>
);
