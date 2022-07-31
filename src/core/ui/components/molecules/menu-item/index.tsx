import React, { useState } from 'react';
import { AvailableIcons } from '@/core/domain';
import { Icon, Typography } from '@/core/ui/components/atoms';
import { Container, Text } from './styles';

interface IMenuItem {
  text?: string;
  icon?: AvailableIcons;
  onClick?: () => void;
  width?: string;
}

export const MenuItem: React.FC<IMenuItem> = ({ text, icon, onClick, width }) => {
  const [colorHover, setColorHover] = useState<boolean>(false);

  return (
    <Container
      text={!!text}
      width={width}
      onClick={onClick}
      onMouseEnter={() => setColorHover(true)}
      onMouseLeave={() => setColorHover(false)}
    >
      <Icon icon={icon} color={colorHover ? 'primary' : null} shade={colorHover ? '500' : null} />
      <Text>{text && <Typography color={colorHover ? 'primary' : 'default'}>{text}</Typography>}</Text>
    </Container>
  );
};
