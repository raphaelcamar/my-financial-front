import React from 'react';
import { useNavigate } from 'react-router';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { Root } from './styles';

export const LogoName: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Root onClick={() => navigate('/login')}>
      <Icon icon="logo" color="primary" shade="main" />
      <Typography type="p" color="primary" size="xxlarge">
        My financial
      </Typography>
    </Root>
  );
};
