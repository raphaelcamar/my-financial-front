import { useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Accordion, AccordionDetails, ButtonLinkMenu } from '../../atoms';
import { AccordionSummary } from '../../molecules';
import { useStyles } from './styles';

export const SidebarMenu: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [color, setColor] = useState(theme.palette.primary.main);

  const handleClickAccordion = () => {
    setColor(theme.palette.grey[50]);
  };

  return (
    <div>
      <Accordion onClick={() => handleClickAccordion()}>
        <AccordionSummary subItems={['']}>teste</AccordionSummary>
        <div className={classes.line}>
          <ButtonLinkMenu path="/">Teste</ButtonLinkMenu>
          <ButtonLinkMenu path="/">Teste</ButtonLinkMenu>
          <ButtonLinkMenu path="/">Teste</ButtonLinkMenu>
          <ButtonLinkMenu path="/">Teste</ButtonLinkMenu>
        </div>
      </Accordion>
      <AccordionSummary>teste</AccordionSummary>
    </div>
  );
};
