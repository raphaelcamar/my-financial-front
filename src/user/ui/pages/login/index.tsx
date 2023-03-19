import React from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import { LoginForm } from '@/user/ui/components/organisms';
import { WrapperFigureForm } from '@/user/ui/components/molecules';

export const Login: React.FC = () => (
  <WrapperFigureForm side="left" figureType="circle" testId="login-page">
    <LoginForm />
    <Button>TResrt</Button>
  </WrapperFigureForm>
);

export default Login;
