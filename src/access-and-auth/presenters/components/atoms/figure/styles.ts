import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${({ theme }) => theme.palette.grey[100]};
`;

export const Format = styled.div`
  position: absolute;
  top: calc(50% - 442px / 2);
  left: calc(50% - 442px / 2);
  margin-left: auto;
  margin-right: auto;
`;

export const Blur = styled.div`
  position: absolute;
  bottom: 0px;
  height: 50vh;
  width: 100%;
  background: rgba(242, 244, 247, 0.32);
  backdrop-filter: blur(35px);
`;
