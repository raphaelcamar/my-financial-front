/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement, useEffect, useState } from 'react';
import { Container, Option, Options } from './styles';
import { randomId } from '@/core/utils';
import { HelperText } from '../helper-text';

export type ItemSelectHorizontalProps = {
  label: string;
  value: string;
};

type InputSelectHorizontalProps = {
  items: ItemSelectHorizontalProps[];
  label: string;
  helperText?: string;
  error?: boolean;
  name: string;
  defaultValue?: string;
  setValue: (name: string, option: any) => void;
};

export const InputSelectHorizontal = ({
  items,
  name,
  defaultValue,
  setValue,
  error,
  helperText,
  label,
}: InputSelectHorizontalProps): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<ItemSelectHorizontalProps>(null);
  const variant = error ? 'error' : 'primary';

  useEffect(() => {
    if (defaultValue) {
      const option = items?.find(item => item?.value === defaultValue);
      setSelectedOption(option || null);
    }
  }, [defaultValue, items]);

  const handleSelectOption = (option: ItemSelectHorizontalProps) => {
    setValue(name, option.value);
    setSelectedOption(option);
  };
  return (
    <Container>
      <label htmlFor="select-hortizontal">{label}</label>
      <Options>
        {items.map(item => (
          <Option
            key={randomId()}
            selected={item.value === selectedOption?.value}
            onClick={() => handleSelectOption(item)}
            type="button"
          >
            {item.label}
          </Option>
        ))}
      </Options>
      <HelperText variant={variant}>{helperText}</HelperText>
    </Container>
  );
};
