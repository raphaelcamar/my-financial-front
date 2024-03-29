import React from 'react';
import { Children, Wrapper, AccordionHeader, Container, WrapperIcon } from './styles';
import { Typography, Icon, AvailableIcons } from '@/core/ui/components/atoms';

interface ISidebarAccordion {
  titleAccordion: string;
  icon?: AvailableIcons;
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
        {icon && (
          <Icon
            icon={icon}
            size={18}
            color={open || hasMatchedRoute ? 'primary' : null}
            shade={open || hasMatchedRoute ? 'main' : null}
          />
        )}
        {sidebarOpen && (
          <Typography weight={500} color={open || hasMatchedRoute ? 'primary' : 'grey'} shade={500}>
            {titleAccordion}
          </Typography>
        )}
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
