import React, { InputHTMLAttributes, useState } from 'react';
import { useTheme } from '@mui/material';
import { ClickAwayListener, Icon } from '@/core/presenters/components/atoms/';
import { useStylesProvider } from './styles';
import { GetIconProps } from '../icon';

export type InputProps = {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  validator?: boolean;
  messageValidator?: string;
  placeholder?: string;
  icon?: GetIconProps;
  ref?: React.LegacyRef<HTMLInputElement>;
};

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  inputProps,
  validator,
  messageValidator,
  icon,
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
          {icon && <Icon icon={icon || 'person'} />}
          <input
            onChange={onChange}
            className={classes.input}
            id={label}
            type="text"
            {...inputProps}
          />
        </div>
      </div>
    </ClickAwayListener>
  );
};
