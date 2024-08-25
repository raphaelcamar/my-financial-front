/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useState, ReactElement, useRef, useLayoutEffect, useCallback, useEffect } from 'react';
import { IInput, Input } from '@/core/ui/components/molecules';
import { InputContainer, NoOptionMessage, OptionsContainer } from './styles';

import { CircularProgress, ClickAwayListener } from '@/core/ui/components/atoms';
import { ColorProps } from '@/main/styled';
import { AutocompleteOption } from '../../molecules/autocomplete-option';

export type OptionProps = {
  label: string;
  value: string;
  data?: any;
  deletable?: boolean;
  selectable?: boolean;
  disabled?: boolean;
  selected?: boolean;
};

export type AutocompleteStateOption = {
  default: OptionProps[];
  filteredOptions: OptionProps[];
};

export type AutocompleteProps = IInput & {
  items: OptionProps[];
  maxOptions?: number;
  filterInTyping?: boolean;
  noOptionsText?: string;
  colorLoading?: keyof ColorProps;
  loading?: boolean;
  onSelect: (items: OptionProps[]) => void;
};

export const Autocomplete = ({
  maxOptions,
  items,
  onSelect,
  colorLoading,
  loading,
  noOptionsText,
  ...inputProps
}: AutocompleteProps): ReactElement => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [width, setWidth] = useState(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<Map<string, OptionProps>>(() => new Map());

  const [options, setOptions] = useState<AutocompleteStateOption>({
    default: [],
    filteredOptions: [],
  });

  const [filtering, setFiltering] = useState<boolean>(false);

  const ref = useRef(null);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    items?.map(item => (item.selected ? selectedOptions.set(item.value, item) : null));
    setSelectedOptions(new Map(selectedOptions));

    setOptions({ default: items, filteredOptions: [] });
  }, [items]);

  useEffect(() => {
    inputValue.length > 0 ? setFiltering(true) : setFiltering(false);

    const filteredOptions = options?.default?.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    setOptions({ ...options, filteredOptions });
  }, [inputValue]);

  const verifyIfIsSelectable = (item: OptionProps): boolean => {
    if (item.selected || selectedOptions.has(item.value)) return true;
    return false;
  };

  const toggleReturnSelectedItems = (currentState: Map<string, OptionProps>) => {
    const arrItems: OptionProps[] = [];
    currentState.forEach(item => arrItems.push(item));

    onSelect(arrItems);
  };

  const toggleSelectedItems = (item: OptionProps) => {
    if (selectedOptions.has(item.value)) {
      selectedOptions.delete(item.value);
      setSelectedOptions(new Map(selectedOptions));
    } else {
      selectedOptions.set(item.value, { ...item, selected: true });
      setSelectedOptions(new Map(selectedOptions));
    }

    toggleReturnSelectedItems(selectedOptions);
  };

  const renderFilteredOptions = useCallback(
    () => (
      <>
        {options.filteredOptions.length <= 0 ? (
          <NoOptionMessage>{noOptionsText || 'Não possui nenhum item'}</NoOptionMessage>
        ) : (
          <>
            {options?.filteredOptions?.map(option => (
              <AutocompleteOption
                key={option.value}
                onClick={() => toggleSelectedItems(option)}
                selected={verifyIfIsSelectable(option)}
              >
                {option.label}
              </AutocompleteOption>
            ))}
          </>
        )}
      </>
    ),
    [options.filteredOptions, selectedOptions]
  );

  const renderDefaultOptions = useCallback(
    () => (
      <>
        {options?.default?.map(option => (
          <AutocompleteOption
            selected={verifyIfIsSelectable(option)}
            key={option.value}
            onClick={() => toggleSelectedItems(option)}
          >
            {option.label}
          </AutocompleteOption>
        ))}
      </>
    ),
    [options.default]
  );

  return (
    <>
      <ClickAwayListener onClickAway={() => setOpenOptions(false)}>
        <InputContainer onFocus={() => setOpenOptions(true)} ref={ref} open={openOptions}>
          <Input
            noBottomRadius={openOptions}
            onChange={e => setInputValue(e.target.value)}
            className="input"
            actionEnd={loading ? <CircularProgress size={24} color={colorLoading || 'primary'} /> : <></>}
            {...inputProps}
          />
          <OptionsContainer open={openOptions} width={width} maxOptions={maxOptions}>
            {filtering ? renderFilteredOptions() : renderDefaultOptions()}
          </OptionsContainer>
        </InputContainer>
      </ClickAwayListener>
    </>
  );
};
