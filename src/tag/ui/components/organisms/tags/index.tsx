import React, { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import { TagCards } from './styles';
import { useTagContext } from '@/tag/presenters/contexts';
import { ModalDeleteTag, TagCard } from '@/tag/ui/components/molecules';
import { CircularProgress } from '@/core/ui/components/atoms';
import { Tag } from '@/tag/domain/entities';

export const Tags: React.FC = () => {
  const { tags, getAllTags, modifyTagStatus, loading, deleteTag } = useTagContext();
  const [modalDeleteOpen, setModalDeleteOpen] = useState<Tag>(null);

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
        <TagCard
          tag={tag}
          modifyTagStatus={modifyTagStatus}
          deleteTag={deleteableTag => setModalDeleteOpen(deleteableTag)}
          editTag={DeleteableTag => setModalDeleteOpen(DeleteableTag)}
        />
      ))}
    </>
  );

  useEffect(() => {
    getTags();
  }, []);

  return loading ? (
    <CircularProgress size={36} color="primary" />
  ) : (
    <>
      <TagCards>{renderListTags()}</TagCards>
      <ModalDeleteTag
        deleteTag={deleteTag}
        open={!!modalDeleteOpen}
        setOpen={setModalDeleteOpen}
        tag={modalDeleteOpen}
      />
    </>
  );
};
