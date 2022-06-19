import styled, { keyframes } from 'styled-components';

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const FadeIn = styled.div`
  animation-name: ${FadeInAnimation};
  animation-duration: 2s;
`;
