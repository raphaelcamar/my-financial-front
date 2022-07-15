import React from 'react';
import { LoginForm } from '@/access-and-auth/ui/components/organisms';
import { WrapperFigureForm } from '@/access-and-auth/ui/components/molecules';

export const Login: React.FC = () => (
  <WrapperFigureForm side="left" figureType="circle">
    <LoginForm />
  </WrapperFigureForm>
);

export default Login;
