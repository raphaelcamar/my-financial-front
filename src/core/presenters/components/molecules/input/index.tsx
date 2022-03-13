import React, { InputHTMLAttributes, useState } from 'react';
import { useTheme } from '@mui/material';
import { ClickAwayListener, Icon, GetIconProps, Typography } from '@/core/presenters/components/atoms';
import { useStylesProvider } from './styles';

export type InputProps = {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  validator?: boolean;
  messageValidator?: string;
  placeholder?: string;
  icon?: GetIconProps;
  ref?: React.LegacyRef<HTMLInputElement>;
  tooltipMessage?: string;
};

export const Input: React.FC<InputProps> = ({ label, onChange, inputProps, validator, messageValidator, icon }) => {
  const theme = useTheme();
  const [focused, setFocused] = useState(theme.palette.grey[400]);

  const colorValidate = validator ? theme.palette.error.main : focused;
  const classes = useStylesProvider(colorValidate);

  return (
    <ClickAwayListener onClickAway={() => setFocused(theme.palette.grey[400])}>
      <div className={classes.container}>
        <label htmlFor={label}>{label}</label>
        <div className={classes.containerInput} onFocusCapture={() => setFocused(theme.palette.primary.main)}>
          {icon && <Icon icon={icon || 'person'} color={colorValidate} />}
          <input onChange={onChange} className={classes.input} id={label} type="text" {...inputProps} />
        </div>
        {messageValidator ? (
          <Typography color={theme.palette.error.main} className={classes.messageValidator}>
            {messageValidator}
          </Typography>
        ) : (
          <div className={classes.invisible} />
        )}
      </div>
    </ClickAwayListener>
  );
};
