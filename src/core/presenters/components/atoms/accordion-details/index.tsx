import React from 'react';
import { AccordionDetails as MuiAccordionDetails } from '@mui/material';
import { useStyles } from './styles';

export const AccordionDetails: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <MuiAccordionDetails className={classes.container}>{children}</MuiAccordionDetails>
    </>
  );
};
