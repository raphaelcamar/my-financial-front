import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-left: 8px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
