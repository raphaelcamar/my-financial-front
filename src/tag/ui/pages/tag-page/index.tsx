import React from 'react';
import { Container } from './styles';
import { Tags, HeaderTagPage } from '@/tag/ui/components/organisms';
import { TagProvider } from '@/tag/presenters/contexts';

export const TagPage: React.FC = () => (
  <TagProvider>
    <Container>
      <HeaderTagPage />
      <Tags />
    </Container>
  </TagProvider>
);

export default TagPage;
