import React, { ReactElement } from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import { createPortal } from 'react-dom';
import { Container, WrapperSaveBar } from './styles';
import { Typography } from '../../atoms';

type ISaveBar = {
  saveChanges: () => void;
  revertChanges: () => void;
  loading?: boolean;
  message?: string;
  isOpen?: boolean;
};
export const SaveBar = ({ revertChanges, saveChanges, loading, message, isOpen }: ISaveBar): ReactElement => (
  <>
    {createPortal(
      <Container isOpen={isOpen}>
        <WrapperSaveBar>
          <Typography>{message || 'Você possui alterações não salvas. Deseja aplicar as alterações ?'}</Typography>
          <Button variant="error" styleType="outlined" onClick={() => revertChanges()} disabled={loading}>
            Reverter
          </Button>
          <Button variant="primary" styleType="fullfiled" onClick={() => saveChanges()} loading={loading}>
            Aplicar
          </Button>
        </WrapperSaveBar>
      </Container>,
      document.body
    )}
  </>
);
