import React, { ReactNode } from 'react';
import { Figure } from '@/user/ui/components/atoms';

import { Figure as FigureStyle, Form, Root } from './styles';

export interface IWrapperFigureForm {
  side: 'left' | 'right';
  figureType: 'circle' | 'square';
  children: ReactNode;
  testId?: string;
}

export const WrapperFigureForm: React.FC<IWrapperFigureForm> = ({ side, figureType, children, testId }) => (
  <Root data-testid={testId}>
    <Form>{children}</Form>
    <FigureStyle side={side}>
      <Figure type={figureType} />
    </FigureStyle>
  </Root>
);
