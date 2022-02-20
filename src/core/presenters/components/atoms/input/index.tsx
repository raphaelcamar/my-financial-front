import React, { InputHTMLAttributes, useState } from 'react';
import { useTheme } from '@mui/material';
import { ClickAwayListener, Icon } from '@/core/presenters/components/atoms/';
import { useStylesProvider } from './styles';

export type InputProps = {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: InputHTMLAttributes<any>;
  validator?: boolean;
  messageValidator?: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  inputProps,
  validator,
  messageValidator,
  placeholder,
}) => {
  const theme = useTheme();
  const [focused, setFocused] = useState(theme.palette.primary.light);

  const colorValidate = validator ? theme.palette.error.main : focused;
  const classes = useStylesProvider(colorValidate);

  return (
    <ClickAwayListener
      onClickAway={() => setFocused(theme.palette.primary.light)}
    >
      <div className={classes.container}>
        <label className={classes.label} htmlFor={label}>
          {label}
        </label>
        <div
          className={classes.containerInput}
          onFocusCapture={() => setFocused(theme.palette.primary.main)}
        >
          <Icon icon="person" />
          <input
            onChange={onChange}
            className={classes.input}
            id={label}
            type="text"
            placeholder={placeholder}
            {...inputProps}
          />
        </div>
      </div>
    </ClickAwayListener>
  );
};
