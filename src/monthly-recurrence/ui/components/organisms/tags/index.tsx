import React, { useEffect } from 'react';

import { useSnackbar } from 'notistack';
import { TagCards } from './styles';
import { useTagContext } from '@/monthly-recurrence/presenters/contexts';
import { TagCard } from '@/monthly-recurrence/ui/components/molecules';
import { CircularProgress } from '@/core/ui/components/atoms';

export const Tags: React.FC = () => {
  const { tags, getAllTags, modifyTagStatus, loading } = useTagContext();
  const { enqueueSnackbar } = useSnackbar();

  const getTags = async () => {
    try {
      await getAllTags();
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu alguma coisa, tente novamente mais tarde.', {
        variant: 'error',
      });
    }
  };

  const deleteTag = () => null;

  const renderListTags = (): JSX.Element => (
    <>
      {tags?.map(tag => (
        <TagCard key={tag?.id} tag={tag} modifyTagStatus={modifyTagStatus} deleteTag={deleteTag} />
      ))}
    </>
  );

  useEffect(() => {
    getTags();
  }, []);

  return loading ? <CircularProgress size={36} color="primary" /> : <TagCards>{renderListTags()}</TagCards>;
};
