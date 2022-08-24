import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import { CodeRecoverValidator } from '@/user/data/use-cases/access';
import { ValidationComposite } from '@/core/validation';
import { useAccessContext } from '@/user/presenters/contexts/access';

export const usePasswordSecondStep = (handleChangeStep: () => void) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [pinValue, setPinValue] = useState<string[]>(new Array(5).fill(''));
  const [error, setError] = useState<string>(null);

  const { sendCodeRecover, recoverPassworSendEmail, passwordToken } = useAccessContext();
  const { enqueueSnackbar } = useSnackbar();

  const changePinFocus = (index: number): void => {
    const ref = inputRefs.current[index];
    if (ref) {
      ref.focus();
    }
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = new ValidationComposite(CodeRecoverValidator());
      const message = result.validate('code', pinValue.join(''));
      setError(message);
      if (!message) {
        await sendCodeRecover(pinValue.join(''));

        handleChangeStep();
      }
    } catch (err) {
      enqueueSnackbar(err?.message || 'Algo aconteceu. Tente novamente depois', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const signRef = (el: HTMLInputElement, index: number): void => {
    if (el) {
      inputRefs.current[index] = el;
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, position: number): void => {
    const { value } = e.target;
    const arr = pinValue;
    arr[position] = value;

    if (value) {
      setPinValue(arr);
      changePinFocus(position + 1);
    } else {
      changePinFocus(position);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, position: number): void => {
    const keyboardKeyCode = e.nativeEvent.code;

    if (keyboardKeyCode !== 'Backspace') {
      return;
    }

    if (!pinValue[position]) {
      changePinFocus(position - 1);
    }
  };

  const handleSendNewCode = async () => {
    await recoverPassworSendEmail(passwordToken);
  };

  return {
    loading,
    error,
    changePinFocus,
    handleSendNewCode,
    handleKeyDown,
    signRef,
    handleChangeInput,
    handleSubmitForm,
  };
};
