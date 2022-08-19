import React from 'react';
import { FilterTag, TagActions } from '@/tag/ui/components/atoms';
import { Filter } from './styles';

export const HeaderTagPage: React.FC = () => (
  <Filter>
    <FilterTag />
    <TagActions />
  </Filter>
);
