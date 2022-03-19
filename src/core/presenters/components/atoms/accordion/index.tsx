import React from 'react';
import { Accordion as MuiAccordion, AccordionProps } from '@mui/material';
import { useStyles } from './styles';

export const Accordion: React.FC<AccordionProps> = ({ children, onChange }) => {
  const classes = useStyles();

  return (
    <MuiAccordion className={classes.container} defaultExpanded={false} disableGutters onChange={onChange}>
      {children}
    </MuiAccordion>
  );
};
