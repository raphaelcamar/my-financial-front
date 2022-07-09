import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
`;

export const WrapperHamburguerBar = styled.div`
  cursor: pointer;
  display: none;
  visibility: hidden;
  @media (${({ theme }) => theme.breakpoints.down('md')}) {
    visibility: visible;
    display: inherit;
  }
`;
