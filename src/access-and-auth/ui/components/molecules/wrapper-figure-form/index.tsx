import React, { ReactNode } from 'react';
import { Figure } from '@/access-and-auth/ui/components/atoms';

import { Figure as FigureStyle, Form, Root } from './styles';

export interface IWrapperFigureForm {
  side: 'left' | 'right';
  figureType: 'circle' | 'square';
  children: ReactNode;
}

export const WrapperFigureForm: React.FC<IWrapperFigureForm> = ({ side, figureType, children }) => (
  <Root>
    <Form>{children}</Form>
    <FigureStyle side={side}>
      <Figure type={figureType} />
    </FigureStyle>
  </Root>
);
