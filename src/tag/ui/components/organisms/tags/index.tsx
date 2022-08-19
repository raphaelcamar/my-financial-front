import React, { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import { TagCards } from './styles';
import { useTagContext } from '@/tag/presenters/contexts';
import { TagCard } from '@/tag/ui/components/molecules';
import { CircularProgress } from '@/core/ui/components/atoms';
import { delay } from '@/core/utils';

export const Tags: React.FC = () => {
  const { tags, getAllTags, modifyTagStatus } = useTagContext();
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const getTags = async () => {
    setLoading(true);
    try {
      // await delay(2000);
      await getAllTags();
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu alguma coisa, tente novamente mais tarde.', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
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

  return <>{loading ? <CircularProgress size={36} color="primary" /> : <TagCards>{renderListTags()}</TagCards>}</>;
};
