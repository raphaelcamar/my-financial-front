import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { Circle, Header, Title } from './styles';
import { ColorProps } from '@/main/styled';
import { MoreOptions } from '@/core/ui/components/organisms';

interface IHeaderCard {
  color: keyof ColorProps;
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const HeaderCard: React.FC<IHeaderCard> = ({ color, onDelete, onEdit, title }) => (
  <Header>
    <Title>
      <Circle color={color} />
      <Typography size="normal" weight={700} shade={700}>
        {title}
      </Typography>
    </Title>

    <MoreOptions
      items={[
        { text: 'Editar', disabled: true, icon: 'pen' },
        { text: 'Excluir', icon: 'trash', onClick: () => onDelete() },
      ]}
    />
  </Header>
);
