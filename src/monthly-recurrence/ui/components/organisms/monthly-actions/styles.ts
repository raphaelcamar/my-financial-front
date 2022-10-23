import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 550px;

  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    width: auto;
  }
`;
