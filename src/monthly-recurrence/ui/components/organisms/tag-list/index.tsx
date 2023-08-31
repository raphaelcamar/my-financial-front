import React, { ReactElement, useState } from 'react';
import { Icon, Paper, Typography } from '@/core/ui/components/atoms';
import { Header, StyledIconButton, WrapperTagItems, WrapperTagList } from './styles';
import { TagItem, TagPagination } from '../../molecules';

export const TagList = (): ReactElement => {
  const [state, setState] = useState();

  return (
    <Paper density={1}>
      <WrapperTagList>
        <Header>
          <Typography weight={600} size="xlarge" color="grey" shade={700}>
            Suas tags
          </Typography>
          <StyledIconButton>
            <Icon icon="add" color="primary" shade="500" size={14} />
          </StyledIconButton>
        </Header>
        <WrapperTagItems>
          <TagItem />
          <TagItem />
          <TagItem />
          <TagItem />
        </WrapperTagItems>
        <TagPagination />
      </WrapperTagList>
    </Paper>
  );
};
