/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, ReactElement, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import {
  SelectTagsButton,
  StyledButton,
  TagCircle,
  WrapperButtons,
  WrapperCircles,
  WrapperInputTag,
  WrapperModal,
  WrapperTagInfos,
  WrapperTags,
} from './styles';
import { HelperText, Modal, TextEllipsis, Typography } from '@/core/ui/components/atoms';
import { Input } from '@/core/ui/components/molecules';
import { TagItem } from '../../molecules';
import { Tag } from '@/monthly-recurrence/domain';
import { MonthlyRecurrenceRepositoryData } from '@/monthly-recurrence/infra';
import { useAccessContext } from '@/user/presenters';

interface IInputSelectTags {
  setSelectedTags: Dispatch<SetStateAction<{ id: string }[]>>;
}

interface ISelectableTag extends Tag {
  selected: boolean;
}

export const InputSelectTags = ({ setSelectedTags }: IInputSelectTags): ReactElement => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [preSelectTags, setPreSelectTags] = useState<ISelectableTag[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);

  const { currentWallet } = useAccessContext();
  const { enqueueSnackbar } = useSnackbar();

  const getAllTags = async () => {
    try {
      const repository = new MonthlyRecurrenceRepositoryData();
      const result = await repository.getAllTags(currentWallet.id);

      setTags(result);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Aconteceu alguma coisa. Tente novamente depois', { variant: 'error' });
    }
  };

  useEffect(() => {
    getAllTags();
  }, []);

  useEffect(() => {
    const adaptTagsToSelect = tags?.map(tag => ({ ...tag, selected: false }));
    setPreSelectTags(adaptTagsToSelect);
  }, [tags]);

  const handleSelectTag = (ind: number) => {
    const newTags = [...preSelectTags];

    newTags[ind].selected = !newTags[ind].selected;

    setPreSelectTags(newTags);
  };

  const handleCancelSelect = () => {
    setOpenModal(false);
    const newTags = preSelectTags.map(tag => ({ ...tag, selected: false }));

    setPreSelectTags(newTags);
  };

  const handleConfirmSelect = () => {
    const adaptee = preSelectTags.filter(tag => tag.selected === true).map(tag => ({ id: tag.id }));

    setSelectedTags(adaptee);
    setOpenModal(false);
  };

  const selectedTags = useMemo(() => preSelectTags?.filter(tag => tag.selected), [preSelectTags]);
  const filteredTags = useMemo(
    () => preSelectTags?.filter(tag => tag.title.includes(inputValue) || tag.description.includes(inputValue)),
    [inputValue]
  );

  const renderTagsOrFilteredTags = () => {
    if (filteredTags.length > 0) {
      return filteredTags?.map((tag, index) => (
        <TagItem
          key={tag.id}
          tag={tag}
          withoutActions
          onSelect={() => handleSelectTag(index)}
          selected={tag.selected}
        />
      ));
    }

    return preSelectTags?.map((tag, index) => (
      <TagItem key={tag.id} tag={tag} withoutActions onSelect={() => handleSelectTag(index)} selected={tag.selected} />
    ));
  };

  const renderSelectedTagsOnInput = () => {
    if (selectedTags?.length >= 5) {
      const arr = selectedTags.slice(0, 5);

      return arr?.map((tag, ind) =>
        ind === 0 ? (
          <TagCircle bgColor={tag.color} shade={tag.shade || 500} hasNoMargin />
        ) : (
          <TagCircle bgColor={tag.color} shade={tag.shade || 500} />
        )
      );
    }

    return (
      <>
        {selectedTags?.map((tag, ind) =>
          ind === 0 ? (
            <TagCircle bgColor={tag.color} shade={tag.shade || 500} hasNoMargin />
          ) : (
            <TagCircle bgColor={tag.color} shade={tag.shade || 500} />
          )
        )}
      </>
    );
  };

  const messageTags = () => {
    if (selectedTags.length > 5) {
      return '5+ tags selecionadas';
    }

    return `${selectedTags?.length} Tags selecionadas(s)`;
  };

  return (
    <>
      <WrapperInputTag onClick={() => setOpenModal(true)}>
        <label htmlFor="buttonTags">Tag</label>
        <SelectTagsButton id="buttonTags" type="button">
          <WrapperTagInfos>
            <WrapperCircles>
              {renderSelectedTagsOnInput()}
              <TextEllipsis>
                <Typography>{selectedTags?.length > 0 ? messageTags() : 'Nenhuma tag selecionada'} </Typography>
              </TextEllipsis>
            </WrapperCircles>
          </WrapperTagInfos>
        </SelectTagsButton>
        <HelperText />
      </WrapperInputTag>
      <Modal closeModal={() => setOpenModal(false)} open={openModal} title="Filtrar por tags">
        <WrapperModal>
          <Input label="Filtrar tag por nome" value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <WrapperTags>
            {filteredTags.length === 0 && inputValue.length > 0 ? (
              <p>Não possui tags com esse filtro</p>
            ) : (
              renderTagsOrFilteredTags()
            )}
          </WrapperTags>
          <WrapperButtons>
            <StyledButton type="button" styleType="glass" variant="error" onClick={() => handleCancelSelect()}>
              Cancelar
            </StyledButton>
            <StyledButton type="button" onClick={() => handleConfirmSelect()}>
              Confirmar
            </StyledButton>
          </WrapperButtons>
        </WrapperModal>
      </Modal>
    </>
  );
};
