/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { CountdownWrapper, Container, StyledTypography, Options, StyledButton } from './styles';
import { formatMillisecondsToMinutes } from '@/user/utils';

const THREE_MINUTES = 1000 * 60 * 3;

interface ICountdown {
  reset: () => void;
}

export const Countdown: React.FC<ICountdown> = ({ reset }) => {
  const [countdown, setCountdown] = useState<number>(THREE_MINUTES);

  const disableButton = countdown !== 0;

  useEffect(() => {
    if (countdown >= 1000) {
      const intervalId = setInterval(() => {
        setCountdown(countdown - 1000);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [countdown]);

  const resetCountdown = () => {
    setCountdown(THREE_MINUTES);
    reset();
  };

  return (
    <Options>
      <Container>
        <CountdownWrapper width={countdown} />
        <StyledTypography color="grey" shade={50} weight={400}>
          {formatMillisecondsToMinutes(countdown)}
        </StyledTypography>
      </Container>
      <StyledButton disabled={disableButton} onClick={() => resetCountdown()}>
        Reenviar código
      </StyledButton>
    </Options>
  );
};
