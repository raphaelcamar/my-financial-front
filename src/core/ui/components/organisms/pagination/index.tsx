import React, { ReactElement } from 'react';
import { Container, StyledIconButton, WrapperButtons } from './styles';
import { Icon, Typography } from '@/core/ui/components/atoms';

type IPagination = {
  currentPage: number;
  totalPages: number;
  onChangePage: (pageToFetch: number) => Promise<void>;
};

export const Pagination = ({ currentPage, totalPages, onChangePage }: IPagination): ReactElement => {
  const disableNextButton = currentPage === totalPages;
  const disablePreviousButton = currentPage === 1;

  return (
    <Container>
      <Typography color="grey" shade={500} weight={500} size="small">
        Mostrando página {currentPage} de {totalPages}
      </Typography>
      <WrapperButtons>
        <StyledIconButton onClick={() => onChangePage(currentPage - 1)} disabled={disablePreviousButton}>
          <Icon icon="arrowLeft" color={disablePreviousButton ? 'grey' : 'primary'} shade="500" size={12} />
        </StyledIconButton>
        <StyledIconButton disabled={disableNextButton} onClick={() => onChangePage(currentPage + 1)}>
          <Icon icon="arrowRight" color={disableNextButton ? 'grey' : 'primary'} shade="500" size={12} />
        </StyledIconButton>
      </WrapperButtons>
    </Container>
  );
};
