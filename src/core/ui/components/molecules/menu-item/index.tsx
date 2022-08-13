import React, { useState } from 'react';
import { AvailableIcons } from '@/core/domain';
import { Hide, Icon, Typography } from '@/core/ui/components/atoms';
import { Container } from './styles';

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
      <Hide breakpoint="md">{text && <Typography color={colorHover ? 'primary' : 'grey'}>{text}</Typography>}</Hide>
    </Container>
  );
};
