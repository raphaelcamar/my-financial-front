import { useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Accordion, AccordionDetails } from '../../atoms';
import { AccordionSummary } from '../../molecules';
import { useStyles } from './styles';

export const SidebarMenu: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [color, setColor] = useState(theme.palette.primary.main);

  const handleClickAccordion = () => {
    console.log('Teste');
    setColor(theme.palette.grey[50]);
  };

  console.log(color);

  return (
    <>
      <Accordion onClick={() => handleClickAccordion()}>
        <AccordionSummary>teste</AccordionSummary>
        <div className={classes.line}>
          <AccordionDetails>teste</AccordionDetails>
        </div>
      </Accordion>
    </>
  );
};
