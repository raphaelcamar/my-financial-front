import React from 'react';
import { Input, IInput } from '@/core/presenters/components/molecules';
import { currency, date } from '@/core/presenters/utils/input-masks';

type AvailableMasks = 'date' | 'currency';

interface IInputMask extends IInput {
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

export const InputMask: React.FC<IInputMask> = ({ validator, messageValidator, label, onChange, mask, ...props }) => {
  const handleChangeInput = (e: any): void => {
    const maskedInput = availableMasks[mask](e);
    onChange(maskedInput);
  };
  return (
    <Input
      label={label}
      helperText={messageValidator}
      error={validator}
      onChange={e => handleChangeInput(e)}
      {...props}
    />
  );
};
