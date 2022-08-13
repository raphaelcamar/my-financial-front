import React from 'react';
import { IconButton } from '../../molecules';
import { Paper } from '../paper';
import { Typography } from '../typography';
import { Container, ModalWrapper, ModalHeader } from './styles';

interface IModal {
  open?: boolean;
  title?: string;
  closeModal: () => void;
}

export const Modal: React.FC<IModal> = ({ children, open, title, closeModal }) => (
  <Container open={open}>
    <ModalWrapper>
      <Paper density={0}>
        <ModalHeader>
          <Typography size="xlarge" color="grey" weight={600}>
            {title}
          </Typography>
          <IconButton
            onClick={closeModal}
            icon="close"
            color="primary"
            shade="500"
            iconProps={{ color: 'grey', shade: '50' }}
          >
            {title}
          </IconButton>
        </ModalHeader>
        {children}
      </Paper>
    </ModalWrapper>
  </Container>
);
