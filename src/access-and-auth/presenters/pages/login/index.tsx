import React from 'react';
import { LoginForm } from '@/access-and-auth/presenters/components/organisms';
import { WrapperFigureForm } from '../../components/molecules';

export const Login: React.FC = () => (
  <WrapperFigureForm side="left" figureType="circle">
    <LoginForm />
  </WrapperFigureForm>
);
