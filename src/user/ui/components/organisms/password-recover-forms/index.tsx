import React, { useState } from 'react';
import { LogoName, WrapperForm } from '@/user/ui/components/atoms';
import { Wrapper, FadeIn } from './styles';
import { PasswordFirstStep } from './password-first-step';
import { PasswordSecondStep } from './password-second-step';
import { PasswordThirdStep } from './password-thrid-step';

type Steps = 'FIRST_STEP' | 'SECOND_STEP' | 'THIRD_STEP';

export const PasswordRecoverForm: React.FC = () => {
  const [step, setStep] = useState<Steps>('FIRST_STEP');

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
            <PasswordSecondStep handleChangeStep={() => setStep('THIRD_STEP')} />
          </FadeIn>
        )}
        {step === 'THIRD_STEP' && (
          <FadeIn>
            <PasswordThirdStep />
          </FadeIn>
        )}
      </Wrapper>
    </WrapperForm>
  );
};
