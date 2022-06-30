import React from 'react';
import { Children, Wrapper, AccordionHeader, Container, WrapperIcon } from './styles';
import { AvailableIcons } from '@/core/domain';
import { Icon } from '../icon';
import { Typography } from '../typography';

interface IAccordion {
  titleAccordion: string;
  icon: AvailableIcons;
  sidebarOpen: boolean;
  open: boolean;
  setOpen: (open?: boolean) => void;
}

export const Accordion: React.FC<IAccordion> = ({ children, titleAccordion, icon, sidebarOpen, open, setOpen }) => (
  <Wrapper onClick={() => setOpen(!open)} open={open}>
    <Container open={open} sidebarOpen={sidebarOpen}>
      <AccordionHeader>
        <Icon icon={icon} color={open ? 'grey' : null} shade={open ? '50' : null} />
        {sidebarOpen && <Typography color={open ? 'white' : 'grey'}>{titleAccordion}</Typography>}
      </AccordionHeader>
      {sidebarOpen && (
        <WrapperIcon open={open}>
          <Icon icon="arrowDown" color="grey" shade={open ? '50' : '500'} />
        </WrapperIcon>
      )}
    </Container>
    <Children open={open}>{children}</Children>
  </Wrapper>
);
