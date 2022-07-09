import React from 'react';
import { Children, Wrapper, AccordionHeader, Container, WrapperIcon } from './styles';
import { AvailableIcons } from '@/core/domain';
import { Typography, Icon } from '@/core/presenters/components/atoms';

interface ISidebarAccordion {
  titleAccordion: string;
  icon: AvailableIcons;
  sidebarOpen: boolean;
  open: boolean;
  setOpen: (open?: boolean) => void;
  quantity?: number;
  hasMatchedRoute?: boolean;
}

export const SidebarAccordion: React.FC<ISidebarAccordion> = ({
  children,
  titleAccordion,
  icon,
  sidebarOpen,
  open,
  setOpen,
  quantity,
  hasMatchedRoute,
}) => (
  <Wrapper onClick={() => setOpen(!open)} open={open}>
    <Container open={open} sidebarOpen={sidebarOpen} hasMatchedRoute={hasMatchedRoute}>
      <AccordionHeader>
        <Icon
          icon={icon}
          color={open || hasMatchedRoute ? 'primary' : null}
          shade={open || hasMatchedRoute ? 'main' : null}
        />
        {sidebarOpen && <Typography color={open || hasMatchedRoute ? 'primary' : 'grey'}>{titleAccordion}</Typography>}
      </AccordionHeader>
      {sidebarOpen && (
        <WrapperIcon open={open}>
          <Icon icon="arrowDown" color={open || hasMatchedRoute ? 'primary' : 'grey'} shade="500" />
        </WrapperIcon>
      )}
    </Container>
    <Children open={open} quantity={quantity}>
      {children}
    </Children>
  </Wrapper>
);
