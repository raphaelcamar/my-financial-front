import React from 'react';
import { Container } from './styles';
import { Tags, HeaderTagPage } from '@/monthly-recurrence/ui/components/organisms';
import { TagProvider } from '@/monthly-recurrence/presenters/contexts';

export const TagPage: React.FC = () => (
  <TagProvider>
    <Container>
      <HeaderTagPage />
      <Tags />
    </Container>
  </TagProvider>
);

export default TagPage;
