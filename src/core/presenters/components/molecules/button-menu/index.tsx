import React, { useState } from 'react';
import { AccordionSummary as MuiAccordionSummary, AccordionSummaryProps } from '@mui/material';
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
  return (
    <MuiAccordionSummary
      className={clsx(classes.container, toggle && classes.selected)}
      onClick={() => setToggle(!toggle)}
    >
      <div className={classes.wrapper}>
        <div className={classes.titleIcon}>
          <Icon icon={icon} color={toggle ? 'grey' : null} shade={toggle ? '50' : null} />
          <Typography color={toggle ? 'white' : 'grey'}>{children}</Typography>
        </div>
        {isAccordion && (
          <div className={classes.icon}>
            <Icon icon="arrowDown" color="grey" shade={toggle ? '50' : '500'} />
          </div>
        )}
      </div>
    </MuiAccordionSummary>
  );
};
