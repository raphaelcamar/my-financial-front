/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement, useState } from 'react';
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

export const InputSelectTags = (): ReactElement => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectableTags, setSelectableTags] = useState(false);

  const hasHelperText = false;

  return (
    <>
      <WrapperInputTag onClick={() => setOpenModal(true)}>
        <label htmlFor="buttonTags">Tag</label>
        <SelectTagsButton id="buttonTags">
          <WrapperTagInfos>
            <WrapperCircles>
              <TagCircle bgColor="brown" hasNoMargin />
              <TagCircle bgColor="green" />
              <TagCircle bgColor="info" />
              <TagCircle bgColor="success" />
              <TagCircle bgColor="info" />
              <TextEllipsis>
                <Typography>4 Tags selecionadas(s)</Typography>
              </TextEllipsis>
            </WrapperCircles>
          </WrapperTagInfos>
        </SelectTagsButton>
        <HelperText>{hasHelperText ? '' : ''}</HelperText>
      </WrapperInputTag>
      <Modal closeModal={() => setOpenModal(false)} open={openModal} title="Filtrar por tags">
        <WrapperModal>
          <Input label="Filtrar tag por nome" />
          <WrapperTags>
            {/* <TagItem withoutActions onSelect={() => setSelectableTags(!selectableTags)} selected={selectableTags} />
            <TagItem withoutActions onSelect={() => null} />
            <TagItem withoutActions onSelect={() => null} />
            <TagItem withoutActions onSelect={() => null} />
            <TagItem withoutActions onSelect={() => null} />
            <TagItem withoutActions onSelect={() => null} />
            <TagItem withoutActions onSelect={() => null} />
            <TagItem withoutActions onSelect={() => null} />
            <TagItem withoutActions onSelect={() => null} /> */}
          </WrapperTags>
          <WrapperButtons>
            <StyledButton type="button" styleType="glass" variant="error" onClick={() => setOpenModal(false)}>
              Cancelar
            </StyledButton>
            <StyledButton type="button">Confirmar</StyledButton>
          </WrapperButtons>
        </WrapperModal>
      </Modal>
    </>
  );
};
