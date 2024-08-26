import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Tag } from '@/monthly-recurrence/domain';
import { Modal, Typography } from '@/core/ui/components/atoms';
import * as S from './styles';
import { formatDateBR } from '@/core/utils';
import { MonthlyRecurrenceRepositoryData } from '@/monthly-recurrence/infra';
import { useAccessContext } from '@/user/presenters';
import { useMonthlyRecurrenceContext } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';

interface RemoveTagModal {
  closeModal: Dispatch<SetStateAction<boolean>>;
  tag: Tag;
  page?: number;
}

export const RemoveTagModal = ({ closeModal, tag, page }: RemoveTagModal): ReactElement => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { currentWallet } = useAccessContext();
  const { getTags } = useMonthlyRecurrenceContext();

  const deleteTag = async () => {
    try {
      setLoading(true);
      const repository = new MonthlyRecurrenceRepositoryData();
      await repository.deleteTag(tag.id, currentWallet.id);

      enqueueSnackbar('Tag excluída com sucesso!', { variant: 'success' });

      await getTags(page, currentWallet.id);
      closeModal(null);
    } catch (err) {
      enqueueSnackbar(err || 'Não foi possíel excluir a tag', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title="Deseja excluir a tag ?" open closeModal={() => closeModal(null)}>
      <S.Wrapper>
        <S.WrapperAnotations>
          <Typography color="grey" weight={500} size="large">
            {tag.title}
          </Typography>
          <Typography color="grey" weight={300} size="small">
            {tag.description}
          </Typography>
        </S.WrapperAnotations>
        <S.WrapperOtherInfos>
          <Typography color="grey" weight={200}>
            {tag?.inactivatedAt ? formatDateBR(String(tag?.inactivatedAt)) : '-'}
          </Typography>
          <S.Color color={tag.color} shade={tag.shade} />
        </S.WrapperOtherInfos>
      </S.Wrapper>
      <S.WrapperButtons>
        <S.StyledButton
          type="button"
          styleType="glass"
          variant="error"
          onClick={() => closeModal(false)}
          disabled={loading}
        >
          Cancelar
        </S.StyledButton>
        <S.StyledButton onClick={() => deleteTag()} loading={loading} disabled={loading}>
          Confirmar
        </S.StyledButton>
      </S.WrapperButtons>
    </Modal>
  );
};
