import React from 'react';
import { Root, FigureWrapper, Form, FigureSize } from './styles';
import { SubscribeForm } from '@/user/ui/components/organisms';
import { Figure } from '@/user/ui/components/atoms';

export const Subscribe: React.FC = () => (
  <Root>
    <FigureSize>
      <FigureWrapper>
        <Figure type="square" />
      </FigureWrapper>
    </FigureSize>
    <Form>
      <SubscribeForm />
    </Form>
  </Root>
);

export default Subscribe;
