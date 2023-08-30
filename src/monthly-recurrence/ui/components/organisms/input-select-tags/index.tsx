/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement, useState } from 'react';
import { SelectTagsButton, TagCircle, WrapperCircles, WrapperInputTag, WrapperTagInfos } from './styles';
import { HelperText, Modal, TextEllipsis, Typography } from '@/core/ui/components/atoms';

export const InputSelectTags = (): ReactElement => {
  const [state, setState] = useState();
  const [openModal, setOpenModal] = useState<boolean>(false);

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
        Teste
      </Modal>
    </>
  );
};
