import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const EmptySpace = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.2s;
  transition: all ease 0.2s;
  border-radius: 34px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => theme.palette.grey[100]};

  &::before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 0px;
    bottom: 0px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }
`;

export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
`;

export const InputCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.palette.primary[200]};
    border: 1px solid ${({ theme }) => theme.palette.primary[200]};
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${({ theme }) => theme.palette.primary.main};
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`;
