import React from 'react';
import { TextLink, Typography } from '@/core/presenters/components/atoms';
import { Container, Content, StyledTypography } from './styles';

export const NotFound: React.FC = () => (
  <Container>
    <Content>
      <StyledTypography size="xxxlarge" color="primary" weight={600}>
        404
      </StyledTypography>
      <div style={{ display: 'flex' }}>
        <Typography weight={400}>Página não encontrada!</Typography>
        <TextLink to="/transacoes">Volte para tela inicial</TextLink>
      </div>
    </Content>
  </Container>
);
