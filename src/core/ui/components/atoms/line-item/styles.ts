import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Line = styled.div`
  padding: 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.grey[200]};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.grey[700]};

  text-decoration: none;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
