import React from 'react';
import { Input, InputProps } from '@/core/presenters/components/molecules';
import { currency, date } from '@/core/presenters/utils/input-masks';

type AvailableMasks = 'date' | 'currency';

interface IInputMask extends InputProps {
  validator: boolean;
  messageValidator: string;
  mask: AvailableMasks;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const availableMasks = {
  date,
  currency,
};

export const InputMask: React.FC<IInputMask> = ({ validator, messageValidator, label, onChange, mask }) => {
  const handleChangeInput = (e: any): void => {
    const maskedInput = availableMasks[mask](e);
    onChange(maskedInput);
  };
  return (
    <Input
      label={label}
      messageValidator={messageValidator}
      validator={validator}
      onChange={e => handleChangeInput(e)}
    />
  );
};
