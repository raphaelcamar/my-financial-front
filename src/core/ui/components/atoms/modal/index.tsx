import React, { useEffect, useState } from 'react';
import { IconButton } from '../../molecules';
import { Paper } from '../paper';
import { Typography } from '../typography';
import { Container, ModalWrapper, ModalHeader } from './styles';

interface IModal extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  closeModal: () => void;
}

export const Modal: React.FC<IModal> = ({ children, open, title, closeModal, ...props }) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayModal(open);
    }, 1);

    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <Container open={displayModal} data-testid="modal-container">
      <ModalWrapper>
        <Paper density={0} {...props}>
          <ModalHeader>
            <Typography size="xlarge" color="grey" weight={600}>
              {title}
            </Typography>
            <IconButton
              data-testid="icon-button-modal"
              onClick={closeModal}
              icon="close"
              color="primary"
              shade="500"
              iconProps={{ color: 'grey', shade: '50' }}
            />
          </ModalHeader>
          {children}
        </Paper>
      </ModalWrapper>
    </Container>
  );
};
