import React from 'react';
import { TextLink, Typography } from '@/core/ui/components/atoms';
import { Container, Content, StyledTypography } from './styles';
import { useAccessContext } from '@/user/presenters';

export const NotFound: React.FC = () => {
  const { verifyInCache } = useAccessContext();
  return (
    <Container data-testid="not-found-page">
      <Content>
        <StyledTypography size="xxxlarge" color="primary" weight={600}>
          404
        </StyledTypography>
        <div>
          <Typography weight={400}>Página não encontrada!</Typography>
          <TextLink to={!verifyInCache() ? '/login' : '/despesas-e-receitas'}>Volte para tela inicial</TextLink>
        </div>
      </Content>
    </Container>
  );
};
