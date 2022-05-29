/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { InputHTMLAttributes, useState } from 'react';
import { useTheme } from '@mui/material';
import { ClickAwayListener, Icon, Typography } from '@/core/presenters/components/atoms';
import { AvailableIcons } from '@/core/domain';
import { useStylesProvider } from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  validator?: boolean;
  messageValidator?: string;
  placeholder?: string;
  icon?: AvailableIcons;
  ref?: React.LegacyRef<HTMLInputElement>;
  tooltipMessage?: string;
  iconEnd?: AvailableIcons;
  onClickIconEnd?: () => void;
  withoutValidator?: boolean;
};

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  inputProps,
  validator,
  messageValidator,
  icon,
  iconEnd,
  onClickIconEnd,
  withoutValidator,
  ...props
}) => {
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
          <input onChange={onChange} className={classes.input} id={label} type="text" {...inputProps} {...props} />
          {iconEnd && (
            <div className={classes.button} role="button" onClick={onClickIconEnd} tabIndex={0}>
              <Icon icon={iconEnd} color={colorValidate} />
            </div>
          )}
        </div>
        {messageValidator ? (
          <Typography
            color={validator ? theme.palette.error.main : theme.palette.grey[400]}
            className={classes.messageValidator}
          >
            {messageValidator}
          </Typography>
        ) : (
          <>{!withoutValidator && <div className={classes.invisible} />}</>
        )}
      </div>
    </ClickAwayListener>
  );
};

export const MemoizedInput = React.memo(Input);
