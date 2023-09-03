/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Dispatch, ReactElement, SetStateAction, useEffect, useMemo, useState } from 'react';
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
import { useMonthlyRecurrenceContext } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';
import { Tag } from '@/monthly-recurrence/domain';

interface IInputSelectTags {
  setSelectedTags: Dispatch<SetStateAction<{ id: string }[]>>;
}

interface ISelectableTag extends Tag {
  selected: boolean;
}

export const InputSelectTags = ({ setSelectedTags }: IInputSelectTags): ReactElement => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [preSelectTags, setPreSelectTags] = useState<ISelectableTag[]>([]);

  const { tags } = useMonthlyRecurrenceContext();

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

  return (
    <>
      <WrapperInputTag onClick={() => setOpenModal(true)}>
        <label htmlFor="buttonTags">Tag</label>
        <SelectTagsButton id="buttonTags" type="button">
          <WrapperTagInfos>
            <WrapperCircles>
              {selectedTags?.map((tag, ind) =>
                ind === 0 ? (
                  <>
                    <TagCircle bgColor={tag.color} shade={tag.shade || 500} hasNoMargin />
                  </>
                ) : (
                  <>
                    <TagCircle bgColor={tag.color} shade={tag.shade || 500} />
                  </>
                )
              )}
              <TextEllipsis>
                <Typography>
                  {selectedTags?.length > 0 ? 'Tags selecionadas(s)' : 'Nenhuma tag selecionada'}{' '}
                </Typography>
              </TextEllipsis>
            </WrapperCircles>
          </WrapperTagInfos>
        </SelectTagsButton>
        <HelperText />
      </WrapperInputTag>
      <Modal closeModal={() => setOpenModal(false)} open={openModal} title="Filtrar por tags">
        <WrapperModal>
          <Input label="Filtrar tag por nome" />
          <WrapperTags>
            {preSelectTags?.map((tag, index) => (
              <TagItem
                key={tag.id}
                tag={tag}
                withoutActions
                onSelect={() => handleSelectTag(index)}
                selected={tag.selected}
              />
            ))}
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
