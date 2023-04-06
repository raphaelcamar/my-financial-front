import styled, { css } from 'styled-components';

type ArrowOptionSideProps = 'left' | 'right';

type ButtonNavigateProps = {
  side: ArrowOptionSideProps;
};

const getBorderRadiusFromSide = (side: ArrowOptionSideProps) =>
  side === 'left'
    ? css`
        border-radius: 12px 0 0 12px;
      `
    : css`
        border-radius: 0 12px 12px 0;
      `;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 90px;
  /* .swiper {
    width: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
  }
     */
  .slick-slide {
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.primary[200]};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.2s;
  }

  .slick-track {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .slick-center {
    font-size: 24px;
    color: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ArrowOption = styled.button<ButtonNavigateProps>`
  width: 27px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ theme }) => theme.palette.grey[200]};
  ${({ side }) => getBorderRadiusFromSide(side)};
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.palette.grey[300]};
  }
`;
