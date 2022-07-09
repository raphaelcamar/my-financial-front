import React from 'react';
import { Input, IInput } from '@/core/presenters/components/molecules';
import { currency, date, formatCurrencyDefault, formatDateDefault } from '@/core/presenters/utils/input-masks';

type AvailableMasks = 'date' | 'currency';

interface IInputMask extends IInput {
  validator: boolean;
  messageValidator: string;
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
  validator,
  messageValidator,
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
      helperText={messageValidator}
      error={validator}
      onChange={e => handleChangeInput(e)}
      defaultValue={defaultValue && getMaskForDefaultValue[mask](defaultValue)}
      {...props}
    />
  );
};
