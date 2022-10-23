import React, { useState } from 'react';
import { AvailableIcons, Hide, Icon, Typography } from '@/core/ui/components/atoms';
import { Container } from './styles';
import { BreakpointTypes, Shade, VariantProps } from '@/main/styled';

interface IMenuItem {
  text?: string;
  icon?: AvailableIcons;
  onClick?: () => void;
  width?: string;
  hideOnMobile?: keyof BreakpointTypes;
  disabled?: boolean;
}

export const MenuItem: React.FC<IMenuItem> = ({ text, icon, onClick, width, hideOnMobile, disabled }) => {
  const [colorHover, setColorHover] = useState<boolean>(false);

  const handleMouseEvent = (state: boolean): void => {
    if (!disabled) {
      setColorHover(state);
    }
  };

  const getIconShade = (): keyof VariantProps => {
    if (disabled) return '300';
    if (colorHover) return '500';
    return null;
  };

  return (
    <Container
      text={!!text}
      width={width}
      onClick={disabled ? () => null : onClick}
      onMouseEnter={() => handleMouseEvent(true)}
      onMouseLeave={() => handleMouseEvent(false)}
      disabled={disabled}
    >
      <Icon icon={icon} size={16} color={colorHover ? 'primary' : null} shade={getIconShade()} />
      {hideOnMobile ? (
        <Hide breakpoint={hideOnMobile}>
          {text && (
            <Typography weight={500} color={colorHover ? 'primary' : 'grey'} shade={disabled ? 300 : 500}>
              {text}
            </Typography>
          )}
        </Hide>
      ) : (
        <>
          {text && (
            <Typography weight={500} color={colorHover ? 'primary' : 'grey'} shade={disabled ? 300 : 500}>
              {text}
            </Typography>
          )}
        </>
      )}
    </Container>
  );
};
