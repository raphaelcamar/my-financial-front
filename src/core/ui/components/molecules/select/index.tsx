/* eslint-disable no-case-declarations */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useEffect, useState } from 'react';
import { ClickAwayListener, Icon } from '@/core/ui/components/atoms';
import { StyledInput, WrapperIcon, Container, OptionsContainer, Option } from './styles';
import { TypeTransaction } from '@/transaction/domain';
import { SelectType } from '@/core/domain';
import { randomId } from '@/core/utils';

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
  value: string;
  defaultValue?: string;
  setValue?: (name: string, option: any) => void;
  placeholder?: string;
}

export const Select = forwardRef<HTMLInputElement, ISelectProps>(
  ({ label, items, helperText, error, name, value, placeholder, setValue, defaultValue }, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<ISelectOption>(null);

    const handleSelectOption = (option: ISelectOption) => {
      setOpen(false);
      setValue(name, option.value);
      setSelectedOption(option);
    };

    useEffect(() => {
      if (defaultValue) {
        const option = items?.find(item => item.value === defaultValue);
        setSelectedOption(option || null);
      }
    }, [defaultValue, items]);

    const handleListKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: ISelectOption): void => {
      switch (e.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          e.preventDefault();
          setSelectedOption(option);
          break;
        default:
          break;
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setOpen(false);
          break;
        case 'Enter':
          setOpen(!open);
          e.preventDefault();
          break;
        case 'ArrowUp':
          e.preventDefault();
          const prevItem = items?.findIndex(item => item.value === selectedOption?.value);
          setSelectedOption(prevItem[-1] || items?.[0]);
          break;
        case 'ArrowDown':
          e.preventDefault();
          const nextItem = items?.findIndex(item => item.value === selectedOption?.value);
          setSelectedOption(items[nextItem + 1] || items?.[0]);
          break;
        default:
          break;
      }
    };

    return (
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Container>
          <StyledInput
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            ref={ref}
            noBottomRadius={open}
            open={open}
            helperText={helperText}
            error={error}
            label={label}
            readOnly
            aria-activedescendant={selectedOption?.value}
            placeholder={placeholder}
            value={selectedOption?.text}
            onKeyDown={e => handleKeyDown(e)}
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
                id={option?.value}
                tabIndex={0}
                role="option"
                onKeyDown={e => handleListKeyDown(e, option)}
                aria-selected={selectedOption?.value === option?.value}
                selected={selectedOption?.value === option?.value}
                key={randomId()}
                onClick={() => handleSelectOption(option)}
              >
                {option?.text}
              </Option>
            ))}
          </OptionsContainer>
        </Container>
      </ClickAwayListener>
    );
  }
);
