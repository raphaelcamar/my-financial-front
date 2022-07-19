import React, { useState } from 'react';
import { AvailableIcons } from '@/core/domain';
import { Icon, Typography } from '@/core/ui/components/atoms';
import { Container } from './styles';

interface IMenuItem {
  text: string;
  icon?: AvailableIcons;
  onClick?: () => void;
}

export const MenuItem: React.FC<IMenuItem> = ({ text, icon, onClick }) => {
  const [colorHover, setColorHover] = useState<boolean>(false);

  return (
    <Container onClick={onClick} onMouseEnter={() => setColorHover(true)} onMouseLeave={() => setColorHover(false)}>
      <Icon icon={icon} color={colorHover ? 'primary' : null} shade={colorHover ? '500' : null} />
      <Typography color={colorHover ? 'primary' : 'default'}>{text}</Typography>
    </Container>
  );
};
