/* eslint-disable no-extra-boolean-cast */
import { useCallback, useEffect, useRef, useState } from 'react';
import { FieldValidation } from '@/core/data';
import { ValidationComposite } from '@/core/validation';

type FormFields<T> = {
  [Property in keyof T]: {
    message: string;
  };
};

interface IFormHook<T> {
  isValid: boolean;
  messageFields?: FormFields<T>;
  isFormValid?: () => void;
  onChange?: (input: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, fn: (values: T) => void) => void;
  validate?: () => void;
  validateField?: (field: string, value: string) => void;
}

export function UseFormValidation<T>(validators: FieldValidation[]): IFormHook<T> {
  const [messageFields, setMessageFields] = useState<FormFields<T>>(null);
  const [listener, setListener] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const ref = useRef(null);

  useEffect(() => {
    if (messageFields) {
      const hasMessage = Object?.keys(messageFields)?.find(field => messageFields?.[field]?.message?.length > 0);
      if (hasMessage) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      setIsValid(true);
    }
  }, [messageFields]);

  const validateField = (key: string, value: string): void => {
    const composite = new ValidationComposite([...validators]);
    const message = composite.validate(key, value);
    if (message !== messageFields?.[key]?.message) {
      setMessageFields({
        ...messageFields,
        [key]: {
          message,
        },
      });
    }
  };

  const onChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      const value = input?.target?.value;
      const key = input?.target?.name;

      ref.current = { ...ref.current, [key]: value };

      if (listener) {
        validateField(key, value);
      }
    },
    [messageFields]
  );

  const getFieldValues = (): T => {
    const { ...values } = ref.current;

    return values as T;
  };

  const isFormValid = (): void => {
    const composite = new ValidationComposite([...validators]);
    const messages = {};
    Object.keys(ref.current).forEach(field => {
      const message = composite.validate(field, ref.current?.[field]);
      messages[field] = { message };
    });

    setListener(true);
    setMessageFields(messages as FormFields<T>);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>, fn: (values: T) => void) => {
    e.preventDefault();
    isFormValid();
    if (!isValid) return null;

    return fn(getFieldValues());
  };

  return {
    messageFields,
    validateField,
    onChange,
    onSubmit,
    isFormValid,
    isValid,
  };
}
