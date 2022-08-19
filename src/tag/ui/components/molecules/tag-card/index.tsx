import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { Typography } from '@/core/ui/components/atoms';
import { BottomCard, HeaderCard } from '@/tag/ui/components/atoms';
import { StyledPaper } from './styles';
import { Tag, TagStatus } from '@/tag/domain/entities';
import { ColorProps } from '@/main/styled';

interface ITagCard {
  tag: Tag;
  modifyTagStatus: (tagStatus: TagStatus, tagId: string) => Promise<void>;
}

export const TagCard: React.FC<ITagCard> = ({ tag, modifyTagStatus }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleTagStatus = async (tagStatus: TagStatus, tagId: string): Promise<void> => {
    try {
      setLoading(true);
      await modifyTagStatus(tagStatus, tagId);

      enqueueSnackbar('Tag atualizada com sucesso!', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar(err?.message || `Não foi possível ${tagStatus === 'active' ? 'ativar' : 'inativar'} a tag`, {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledPaper density={1}>
      <HeaderCard color={tag?.color as keyof ColorProps} title={tag?.title} onDelete={() => null} onEdit={() => null} />
      <Typography>{tag?.description}</Typography>
      <BottomCard
        createdAt={tag?.createdAt}
        isInactive={!!tag?.inactivatedAt}
        modifyTagStatus={(tagStatus: TagStatus) => handleTagStatus(tagStatus, tag?._id)}
        loading={loading}
      />
    </StyledPaper>
  );
};
