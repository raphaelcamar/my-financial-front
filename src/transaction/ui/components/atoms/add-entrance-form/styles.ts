import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WrapperInputs = styled.div`
  display: flex;
  gap: 12px;

  & > div {
    width: -webkit-fill-available;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  & button {
    width: 100%;
  }
`;
