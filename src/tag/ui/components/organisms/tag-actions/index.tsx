import React from 'react';
import { Button } from '@/core/ui/components/molecules';
import { Container } from './styles';

export const TagActions: React.FC = () => (
  <Container>
    <Button styleType="glass" shade={200} variant="primary">
      Todos
    </Button>
    <Button styleType="glass" variant="grey">
      Ativas
    </Button>
    <Button styleType="glass" variant="grey">
      Inativas
    </Button>
    <Button onClick={() => null} styleType="fullfiled" variant="primary">
      Adicionar
    </Button>
  </Container>
);
