import React from 'react';
import { useLocation } from 'react-router-dom';
import { AvailableIcons, ISidebaroption } from '@/core/domain';
import { ItemSidebar, StyledTypography, WrapperIconText } from './styles';
import { Icon } from '@/core/presenters/components/atoms';
import { AccordionItem } from '@/core/presenters/components/molecules';

interface ISidebarOptions {
  sidebarOptions: ISidebaroption[];
  open: boolean;
}

export const SidebarOptions: React.FC<ISidebarOptions> = ({ sidebarOptions, open }) => {
  const location = useLocation();

  return (
    <>
      {sidebarOptions.map(item => (
        <ItemSidebar>
          <AccordionItem path={item.path} selected={location.pathname === item.path}>
            <WrapperIconText>
              {item.icon && (
                <Icon
                  icon={item.icon as AvailableIcons}
                  color={location.pathname === item.path ? 'grey' : null}
                  shade={location.pathname === item.path ? '50' : null}
                />
              )}
              {open && (
                <StyledTypography color={location.pathname === item.path ? 'white' : 'default'}>
                  {item.title}
                </StyledTypography>
              )}
            </WrapperIconText>
          </AccordionItem>
        </ItemSidebar>
      ))}
    </>
  );
};
