import styled from 'styled-components';

export const Container = styled.div`
  .day {
    font-weight: bold;
    color: ${({ theme }) => theme.palette.grey[500]};
    background: ${({ theme }) => theme.palette.grey[50]};
    border-radius: 4px;
    padding: 4px;

    &:hover {
      background: ${({ theme }) => theme.palette.grey[200]};
      color: ${({ theme }) => theme.palette.primary[500]};
    }
  }

  .react-datepicker {
    border-color: ${({ theme }) => theme.palette.grey[300]};
  }

  .react-datepicker__header {
    background: ${({ theme }) => theme.palette.grey[50]};
    border-bottom-color: ${({ theme }) => theme.palette.grey[300]};

    .react-datepicker__current-month {
      color: ${({ theme }) => theme.palette.grey[500]};
      font-weight: bold;
    }

    .react-datepicker__day-names {
      color: ${({ theme }) => theme.palette.grey[500]};
      padding: 4px;
    }

    .react-datepicker__navigation-icon--previous::before {
      border-color: blue !important;
    }
  }
`;

export const DateOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonWrapper = styled.button`
  all: unset;
  padding: 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.grey[50]};
  margin: 0 8px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.palette.grey[200]};
  }
`;
