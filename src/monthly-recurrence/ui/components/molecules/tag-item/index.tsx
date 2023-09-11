import React, { ReactElement, useState } from 'react';
import { BorderLine, Container, TitleAndLinkedItems, WrapperActionButtons, WrapperInfos } from './styles';
import { Typography } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules';
import { Tag } from '@/monthly-recurrence/domain';

interface ITagItem {
  withoutActions?: boolean;
  selected?: boolean;
  onSelect?: () => void;
  tag: Tag;
}

export const TagItem = ({ withoutActions, selected, onSelect, tag }: ITagItem): ReactElement => {
  const [showActionButtons, setShowActionButtons] = useState(false);

  const showLinkedDescription = (totalLinked: number) => {
    if (totalLinked === 1) return 'Vinculado a 1 item';

    if (totalLinked > 1) return `Vinculado a ${totalLinked} itens`;

    return 'Sem item vinculado';
  };

  return (
    <Container
      onMouseEnter={() => (withoutActions ? null : setShowActionButtons(true))}
      onMouseLeave={() => (withoutActions ? null : setShowActionButtons(false))}
      selected={selected}
      isSelectable={Boolean(onSelect)}
      onClick={() => (onSelect ? onSelect() : null)}
    >
      <BorderLine color={tag.color} shade={tag.shade || 500} />
      <WrapperInfos>
        <TitleAndLinkedItems>
          <Typography size="large" weight={500}>
            {tag.title}
          </Typography>
          {/* TODO */}
          <Typography size="xxsmall" color="grey" shade={400}>
            {showLinkedDescription(tag.totalLinked)}
          </Typography>
        </TitleAndLinkedItems>
        <WrapperActionButtons showButton={showActionButtons}>
          <IconButton icon="pen" color="grey" shade="200" iconProps={{ color: 'primary', shade: '500' }} />
          <IconButton icon="trash" color="grey" shade="200" iconProps={{ color: 'primary', shade: '500' }} />
        </WrapperActionButtons>
      </WrapperInfos>
    </Container>
  );
};
