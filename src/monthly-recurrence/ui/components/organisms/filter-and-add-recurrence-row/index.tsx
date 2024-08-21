import React, { ReactElement, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Container, GroupFilter, StyledButton, StyledIconButton } from './styles';
import { Input } from '@/core/ui/components/molecules';
import { CircularLoader, Icon } from '@/core/ui/components/atoms';
import { InputSelectTags } from '../input-select-tags';
import { useMonthlyRecurrenceContext } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';
import { useAccessContext } from '@/user/presenters';
import { AddMonthlyRecurrenceModal } from '../add-monthly-recurrence-modal';

export const FilterAndAddRecurrenceRow = (): ReactElement => {
  const { loading, setLoading, getMonthlyRecurrences } = useMonthlyRecurrenceContext();
  const { currentWallet } = useAccessContext();
  const { enqueueSnackbar } = useSnackbar();

  const [modal, setModal] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<Array<{ id: string }>>([]);

  const applyFilter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await getMonthlyRecurrences(currentWallet.id, { input: inputSearch, tags: selectedTags });
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível aplicar os filtros');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <GroupFilter onSubmit={e => applyFilter(e)}>
          <Input label="Nome" name="name" onChange={e => setInputSearch(e.target.value)} value={inputSearch} />
          <InputSelectTags setSelectedTags={setSelectedTags} />
          <StyledIconButton disabled={loading} type="submit">
            {loading ? (
              <CircularLoader color="primary" shade={500} size={16} />
            ) : (
              <Icon icon="search" size={16} shade="500" color="primary" />
            )}
          </StyledIconButton>
        </GroupFilter>
        <StyledButton onClick={() => setModal(true)}>Adicionar</StyledButton>
      </Container>
      <AddMonthlyRecurrenceModal open={modal} closeModal={() => setModal(false)} />
    </>
  );
};
