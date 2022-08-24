import React from 'react';
import { WrapperFigureForm } from '@/user/ui/components/molecules';
import { PasswordRecoverForm } from '@/user/ui/components/organisms';

export const PasswordRecover: React.FC = () => (
  <WrapperFigureForm side="left" figureType="circle">
    <PasswordRecoverForm />
  </WrapperFigureForm>
);

export default PasswordRecover;
