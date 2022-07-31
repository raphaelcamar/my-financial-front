import React from 'react';
import { Input, IInput } from '@/core/ui/components/molecules';
import { currency, date, formatCurrencyDefault, formatDateDefault } from '@/core/utils';

type AvailableMasks = 'date' | 'currency';

interface IInputMask extends IInput {
  error: boolean;
  helperText: string;
  mask: AvailableMasks;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const availableMasks = {
  date,
  currency,
};

const getMaskForDefaultValue = {
  date: formatDateDefault,
  currency: formatCurrencyDefault,
};

export const InputMask: React.FC<IInputMask> = ({
  error,
  helperText,
  label,
  onChange,
  mask,
  defaultValue,
  ...props
}) => {
  const handleChangeInput = (e: any): void => {
    const maskedInput = availableMasks[mask](e);
    onChange(maskedInput);
  };

  return (
    <Input
      label={label}
      helperText={helperText}
      error={error}
      onChange={e => handleChangeInput(e)}
      defaultValue={defaultValue && getMaskForDefaultValue[mask](defaultValue)}
      {...props}
    />
  );
};
