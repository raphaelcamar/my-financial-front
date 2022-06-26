import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { AvailableIcons, ISidebaroption } from '@/core/domain';
import { ItemSidebar, StyledTypography, WrapperIconText } from './styles';
import { Icon } from '@/core/presenters/components/atoms';
import { AccordionItem } from '@/core/presenters/components/molecules';

interface ISidebarOptions {
  sidebarOptions: ISidebaroption[];
  open: boolean;
}

export const SidebarOptions: React.FC<ISidebarOptions> = ({ sidebarOptions, open }) => {
  const theme = useContext(ThemeContext);
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
                  color={location.pathname === item.path && theme.palette.grey[50]}
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
