import React from 'react';
import { Button, IconButton } from '@/core/ui/components/molecules';
import { Container } from './styles';

export const MonthlyActions: React.FC = () => (
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
    <Button onClick={() => null} styleType="fullfiled" variant="primary">
      Adicionar
    </Button>
  </Container>
);
