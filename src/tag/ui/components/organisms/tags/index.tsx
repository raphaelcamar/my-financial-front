import React, { useEffect } from 'react';

import { useSnackbar } from 'notistack';
import { TagCards } from './styles';
import { useTagContext } from '@/tag/presenters/contexts';
import { TagCard } from '@/tag/ui/components/molecules';
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

  const renderListTags = (): JSX.Element => (
    <>
      {tags?.map(tag => (
        <TagCard tag={tag} modifyTagStatus={modifyTagStatus} />
      ))}
    </>
  );

  useEffect(() => {
    getTags();
  }, []);

  return loading ? <CircularProgress size={36} color="primary" /> : <TagCards>{renderListTags()}</TagCards>;
};
