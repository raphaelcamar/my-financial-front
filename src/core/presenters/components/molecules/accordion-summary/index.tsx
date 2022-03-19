import React from 'react';
import { AccordionSummary as MuiAccordionSummary, AccordionSummaryProps } from '@mui/material';
import { useStyles } from './styles';
import { GetIconProps, Icon } from '../../atoms/icon';
import { Typography } from '../../atoms/typography';

interface IAccordionSummary extends AccordionSummaryProps {
  icon?: GetIconProps;
}

export const AccordionSummary: React.FC<IAccordionSummary> = ({ children, icon = 'key' }) => {
  const classes = useStyles();
  return (
    <MuiAccordionSummary className={classes.container}>
      <div className={classes.wrapper}>
        <Icon icon={icon} />
        <Typography variant="body1">{children}</Typography>
      </div>
    </MuiAccordionSummary>
  );
};
