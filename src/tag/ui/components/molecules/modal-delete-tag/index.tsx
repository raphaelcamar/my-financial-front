import React, { ReactElement, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Modal, Typography } from '@/core/ui/components/atoms';
import { Tag } from '@/tag/domain/entities';
import { WrapperButtons, WrapperDeleteTag } from './styles';
import { Button, Chip } from '@/core/ui/components/molecules';
import { ColorProps } from '@/main/styled';
import { Ellipsis } from '@/core/ui/components/atoms/text-ellipsis/styles';

type IModalDeleteTag = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<Tag>>;
  tag: Tag;
  deleteTag: (tagId: string) => Promise<void>;
};
export const ModalDeleteTag = ({ open, tag, setOpen, deleteTag }: IModalDeleteTag): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteTag = async (): Promise<void> => {
    try {
      setLoading(true);
      await deleteTag(tag?._id);
      setOpen(null);
    } catch (err) {
      enqueueSnackbar(err?.message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal closeModal={() => setOpen(null)} open={open} title="Tem certeza que deseja deletar a tag?">
      <WrapperDeleteTag>
        <Chip color={(tag?.color as keyof ColorProps) || 'primary'}>{tag?.title}</Chip>
        <Ellipsis rows={1}>
          <Typography size="small" color="grey" shade={400}>
            {tag?.description}
          </Typography>
        </Ellipsis>
        <WrapperButtons>
          <Button onClick={() => setOpen(null)} styleType="glass">
            Cancelar
          </Button>
          <Button disabled={loading} loading={loading} styleType="fullfiled" variant="error" onClick={handleDeleteTag}>
            Deletar
          </Button>
        </WrapperButtons>
      </WrapperDeleteTag>
    </Modal>
  );
};
