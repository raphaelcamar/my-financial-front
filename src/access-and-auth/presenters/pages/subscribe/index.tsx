import React from 'react';
import { Root, FigureWrapper, Form, FigureSize } from './styles';
import { SubscribeForm } from '@/access-and-auth/presenters/components/organisms';
import { Figure } from '@/access-and-auth/presenters/components/atoms';

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
