import React from 'react';
import { LoginForm } from '@/user/ui/components/organisms';
import { WrapperFigureForm } from '@/user/ui/components/molecules';

export const Login: React.FC = () => (
  <WrapperFigureForm side="left" figureType="circle" testId="login-page">
    <LoginForm />
  </WrapperFigureForm>
);

export default Login;
