import React, { useState } from 'react';
import { AccordionSummary as MuiAccordionSummary, AccordionSummaryProps, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useStyles } from './styles';
import { AvailableIcons } from '@/core/domain';
import { Typography, Icon } from '@/core/presenters/components/atoms';

interface IButtonMenu extends AccordionSummaryProps {
  icon?: AvailableIcons;
  isAccordion?: boolean;
}

export const ButtonMenu: React.FC<IButtonMenu> = ({ children, icon = 'key', isAccordion }) => {
  const [toggle, setToggle] = useState(false);
  const classes = useStyles(toggle);
  const theme = useTheme();
  return (
    <MuiAccordionSummary
      className={clsx(classes.container, toggle && classes.selected)}
      onClick={() => setToggle(!toggle)}
    >
      <div className={classes.wrapper}>
        <div className={classes.titleIcon}>
          <Icon icon={icon} color={toggle ? theme.palette.grey[50] : theme.palette.grey[500]} />
          <Typography variant="body1">{children}</Typography>
        </div>
        {isAccordion && (
          <div className={classes.icon}>
            <Icon icon="arrowDown" color={toggle ? theme.palette.grey[50] : theme.palette.grey[500]} />
          </div>
        )}
      </div>
    </MuiAccordionSummary>
  );
};
