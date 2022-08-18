import React from 'react';
import { Container, Filter, TagCards } from './styles';
import { FilterTag, TagActions, TagCard } from '@/tag/ui/components/organisms';
import { TagProvider } from '@/tag/presenters/contexts';

export const TagPage: React.FC = () => (
  <TagProvider>
    <Container>
      <Filter>
        <FilterTag />
        <TagActions />
      </Filter>
      <TagCards>
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
      </TagCards>
    </Container>
  </TagProvider>
);
