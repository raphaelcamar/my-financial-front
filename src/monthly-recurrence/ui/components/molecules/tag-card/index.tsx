import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { Modal, TextEllipsis, Typography } from '@/core/ui/components/atoms';
import { BottomCard, HeaderCard } from '@/monthly-recurrence/ui/components/atoms';
import { BodyModalDelete, StyledPaper, WrapperModalButtons } from './styles';
import { Tag, TagStatus } from '@/monthly-recurrence/domain/entities';
import { ColorProps } from '@/main/styled';
import { Button } from '@/core/ui/components/molecules';

interface ITagCard {
  tag: Tag;
  modifyTagStatus: (tagStatus: TagStatus, tagId: string) => Promise<void>;
  deleteTag: (tagId: string) => Promise<void>;
}

export const TagCard: React.FC<ITagCard> = ({ tag, modifyTagStatus, deleteTag }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

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

  const handleDeleteTag = async (): Promise<void> => {
    setModalDelete(!modalDelete);
  };

  return (
    <StyledPaper density={1}>
      <HeaderCard
        color={tag?.color as keyof ColorProps}
        title={tag?.title}
        onDelete={() => handleDeleteTag()}
        onEdit={() => null}
      />
      <TextEllipsis rows={1}>
        <Typography>{tag?.description}</Typography>
      </TextEllipsis>

      <BottomCard
        createdAt={tag?.createdAt}
        isInactive={!!tag?.inactivatedAt}
        modifyTagStatus={(tagStatus: TagStatus) => handleTagStatus(tagStatus, tag?._id)}
        loading={loading}
      />
      <Modal
        title={`Você deseja deletar a Tag ${tag?.title}?`}
        open={modalDelete}
        closeModal={() => setModalDelete(false)}
      >
        <BodyModalDelete>
          <Typography type="p">Ao deletar, você perderá todas as informações da Tag, tem certeza?</Typography>
          {/* TODO <div>
            <Typography type="p">Itens vinculados</Typography>
            <PaperItemLinked>
              <LineItem linkable>
                <TextEllipsis rows={1}>Teste de recorreência</TextEllipsis>
              </LineItem>
            </PaperItemLinked>
          </div> */}
          <WrapperModalButtons>
            <Button variant="grey" styleType="glass" onClick={() => setModalDelete(false)}>
              Cancelar
            </Button>
            <Button styleType="glass" variant="error">
              Excluir
            </Button>
          </WrapperModalButtons>
        </BodyModalDelete>
      </Modal>
    </StyledPaper>
  );
};
