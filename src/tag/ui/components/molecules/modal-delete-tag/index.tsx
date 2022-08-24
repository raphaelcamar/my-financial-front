/* eslint-disable react/default-props-match-prop-types */
import React, { ReactElement } from 'react';

const defaultProps = {
  name: 'teste',
  handleDelete: () => console.log('Entrou aqui'),
};

type IModalDeleteTag = { name: string } & typeof defaultProps;

export const ModalDeleteTag = ({ handleDelete, name }: IModalDeleteTag): ReactElement => (
  <div onClick={() => handleDelete()}>{name}</div>
);

ModalDeleteTag.defaultProps = defaultProps;
