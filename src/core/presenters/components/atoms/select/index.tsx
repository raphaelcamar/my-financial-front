/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ClickAwayListener, useTheme } from '@mui/material';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Icon } from '../icon';
import { Typography } from '../typography';
import { useStyles } from './styles';

interface ISelectOption {
  text?: string;
  value?: string;
}

// TODO put this component in molecules
// TODO create a input for validate fields. Separating from the input

interface ISelectProps {
  label: string;
  items: ISelectOption[];
  validator?: boolean;
  messageValidator?: string;
  withoutValidator?: boolean;
}

export const Select: React.FC<ISelectProps> = ({ items, label, validator, messageValidator, withoutValidator }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState<ISelectOption>(null);
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();

  const handleSelectOption = (option: ISelectOption) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div>
          <div className={classes.wrapperContainer}>
            <label htmlFor="select">{label}</label>
            <button
              id="select"
              type="button"
              className={clsx(classes.container, open && classes.open, validator && classes.error)}
              onClick={() => setOpen(!open)}
            >
              <div className={classes.wrapper}>
                <div>
                  <Typography>{selected?.text || 'Selecione'}</Typography>
                </div>
                <div className={clsx(classes.icon, open && classes.openShevron)}>
                  <Icon icon="arrowDown" />
                </div>
              </div>
            </button>

            <div className={clsx(classes.optionsContainer, open && classes.openOptions)}>
              {items.map(option => (
                <div className={classes.option} key={option.value} onClick={() => handleSelectOption(option)}>
                  {option.text}
                </div>
              ))}
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
        </div>
      </ClickAwayListener>
    </>
  );
};
