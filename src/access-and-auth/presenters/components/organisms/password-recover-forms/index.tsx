import React, { useState } from 'react';
import { LogoName, WrapperForm } from '@/access-and-auth/presenters/components/atoms';
import { Wrapper, FadeIn } from './styles';
import { PasswordFirstStep } from './password-first-step';
import { PasswordSecondStep } from './password-second-step';

type Steps = 'FIRST_STEP' | 'SECOND_STEP' | 'THIRD_STEP';

export const PasswordRecoverForm: React.FC = () => {
  const [step, setStep] = useState<Steps>('SECOND_STEP');

  return (
    <WrapperForm>
      <LogoName />

      <Wrapper>
        {step === 'FIRST_STEP' && (
          <FadeIn>
            <PasswordFirstStep handleChangeStep={() => setStep('SECOND_STEP')} />
          </FadeIn>
        )}
        {step === 'SECOND_STEP' && (
          <FadeIn>
            <PasswordSecondStep />
          </FadeIn>
        )}
        {step === 'THIRD_STEP' && <div />}
      </Wrapper>
    </WrapperForm>
  );
};
