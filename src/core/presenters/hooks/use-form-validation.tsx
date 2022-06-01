/* eslint-disable no-extra-boolean-cast */
import { useState } from 'react';
import { FieldValidation } from '@/core/data';
import { ValidationComposite } from '@/core/validation';

type FormFields<T> = {
  [Property in keyof T]: {
    message: string;
  };
};

interface IFormHook<T> {
  validate: () => void;
  isFormValid: () => boolean;
  validateField: (field: keyof T, value: string) => void;
  messageFields?: FormFields<T>;
}

export function useValidationForm<T>(fields: T, validators: FieldValidation[]): IFormHook<T> {
  const [messageFields, setMessageFields] = useState<FormFields<T>>(null);

  const validate = () => {
    const composite = new ValidationComposite([...validators]);
    const messages = {};
    Object?.keys(fields).forEach(field => {
      const message = composite.validate(field, fields[field]);
      messages[field] = { message };
    });
    setMessageFields(messages as FormFields<T>);
  };

  const isFormValid = (): boolean => {
    const isValid = Object?.keys(fields).find(field => messageFields?.[field]?.message !== null);

    return !Boolean(isValid);
  };

  const validateField = (field: keyof T, value: string): void => {
    const composite = new ValidationComposite([...validators]);
    const message = composite.validate(field as string, value);

    if (message) {
      setMessageFields({
        ...messageFields,
        [field]: message,
      });
    }
  };

  return {
    messageFields,
    isFormValid,
    validate,
    validateField,
  };
}
