import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules';
import { Container } from './styles';

export const FilterTag: React.FC = () => {
  const openFilters = () => null;

  return (
    <Container>
      <IconButton
        icon="filterBar"
        color="grey"
        shade="50"
        padding={[4, 5]}
        onClick={() => openFilters()}
        iconProps={{
          color: 'grey',
          shade: '400',
          size: 28,
        }}
      />
      <Typography weight={600} color="grey" size="large">
        Filtrar Tags
      </Typography>
    </Container>
  );
};
