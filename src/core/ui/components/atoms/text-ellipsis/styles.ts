import styled from 'styled-components';

type EllipsisType = {
  rows: number;
};

export const Ellipsis = styled.div<EllipsisType>`
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  overflow-wrap: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ rows }) => rows};
  display: -webkit-box;
`;
