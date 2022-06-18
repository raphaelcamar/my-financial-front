import React from 'react';
import { WrapperFigureForm } from '@/access-and-auth/presenters/components/molecules';
import { PasswordRecoverForm } from '@/access-and-auth/presenters/components/organisms';

export const PasswordRecover: React.FC = () => (
  <WrapperFigureForm side="left" figureType="circle">
    <PasswordRecoverForm />
  </WrapperFigureForm>
);
