import React, { useState } from 'react';
import { AvailableIcons, Hide, Icon, Typography } from '@/core/ui/components/atoms';
import { Container } from './styles';
import { BreakpointTypes } from '@/main/styled';

interface IMenuItem {
  text?: string;
  icon?: AvailableIcons;
  onClick?: () => void;
  width?: string;
  hideOnMobile?: keyof BreakpointTypes;
}

export const MenuItem: React.FC<IMenuItem> = ({ text, icon, onClick, width, hideOnMobile }) => {
  const [colorHover, setColorHover] = useState<boolean>(false);

  return (
    <Container
      text={!!text}
      width={width}
      onClick={onClick}
      onMouseEnter={() => setColorHover(true)}
      onMouseLeave={() => setColorHover(false)}
    >
      <Icon icon={icon} size={16} color={colorHover ? 'primary' : null} shade={colorHover ? '500' : null} />
      {hideOnMobile ? (
        <Hide breakpoint={hideOnMobile}>
          {text && (
            <Typography weight={500} color={colorHover ? 'primary' : 'grey'}>
              {text}
            </Typography>
          )}
        </Hide>
      ) : (
        <>
          {text && (
            <Typography weight={500} color={colorHover ? 'primary' : 'grey'}>
              {text}
            </Typography>
          )}
        </>
      )}
    </Container>
  );
};
