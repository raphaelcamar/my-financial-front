import React from 'react';
import { LogoName, WrapperForm } from '@/access-and-auth/presenters/components/atoms';
import { PasswordFirstStep } from './password-first-step';
import { Wrapper } from './styles';

export const PasswordRecoverForm: React.FC = () => (
  <WrapperForm>
    <LogoName />

    <Wrapper>
      <PasswordFirstStep />
    </Wrapper>
  </WrapperForm>
);
