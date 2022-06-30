/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useEffect, useState } from 'react';
import { Icon } from '@/core/presenters/components/atoms';
import { StyledInput, WrapperIcon, Container, OptionsContainer, Option } from './styles';
import { TypeTransaction } from '@/transaction/domain';
import { SelectType } from '@/core/domain';

export interface ISelectOption {
  text?: string;
  value?: TypeTransaction;
}

interface ISelectProps {
  label: string;
  items: SelectType<any>[];
  helperText?: string;
  error?: boolean;
  name: string;
  value: SelectType<any>;
  defaultValue?: ISelectOption;
  setValue?: (name: string, option: any) => void;
  placeholder?: string;
}

export const Select = forwardRef<HTMLInputElement, ISelectProps>(
  ({ label, items, helperText, error, name, value, placeholder, setValue, defaultValue }, ref) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleSelectOption = (option: SelectType<any>) => {
      setOpen(false);
      setValue(name, option);
    };

    useEffect(() => {
      handleSelectOption(defaultValue as SelectType<any>);
    }, []);

    return (
      <div>
        <Container>
          <StyledInput
            ref={ref}
            noBottomRadius={open}
            open={open}
            helperText={helperText}
            error={error}
            label={label}
            readOnly
            placeholder={placeholder}
            value={value?.text}
            onClick={() => setOpen(!open)}
            actionEnd={
              <WrapperIcon open={open}>
                <Icon icon="arrowDown" />
              </WrapperIcon>
            }
          />
          <OptionsContainer onBlur={() => setOpen(false)} open={open} error={error}>
            {items.map(option => (
              <Option
                selected={value?.value === option?.value}
                key={option.value}
                onClick={() => handleSelectOption(option)}
              >
                {option.text}
              </Option>
            ))}
          </OptionsContainer>
        </Container>
      </div>
    );
  }
);
