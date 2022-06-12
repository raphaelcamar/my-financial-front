import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { Root } from './styles';

export const LogoName: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Root>
      <Icon icon="logo" color={theme.palette.primary.main} />
      <Typography type="p" color="primary" size="xxlarge">
        My financial
      </Typography>
    </Root>
  );
};
