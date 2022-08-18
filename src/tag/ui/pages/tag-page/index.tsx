import React from 'react';
import { TagCard } from '../../components/organisms/tag-card';
import { Container, Filter, TagCards } from './styles';
import { TagActions } from '../../components/organisms/tag-actions';
import { FilterTag } from '../../components/organisms';

export const TagPage: React.FC = () => (
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
);
