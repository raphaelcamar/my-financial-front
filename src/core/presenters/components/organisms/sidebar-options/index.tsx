import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ISidebaroption } from '@/core/domain';
import { ItemSidebar, WrapperItemAccordion } from './styles';
import { SidebarOption, SidebarAccordion } from '@/core/presenters/components/molecules';

interface ISidebarOptions {
  sidebarOptions: ISidebaroption[];
  sidebarOpen: boolean;
}

export const SidebarOptions: React.FC<ISidebarOptions> = ({ sidebarOptions, sidebarOpen }) => {
  const location = useLocation();
  const [accordion, setAccordion] = useState(false);
  const { pathname } = useLocation();

  const getMatchedRoute = (items: ISidebaroption[]): boolean => items?.some(item => item.path === pathname);

  return (
    <>
      {sidebarOptions.map(item =>
        item?.isAccordion ? (
          <SidebarAccordion
            open={accordion}
            setOpen={setAccordion}
            sidebarOpen={sidebarOpen}
            icon={item?.icon}
            titleAccordion={item?.title}
            hasMatchedRoute={getMatchedRoute(item?.accordionItems)}
            quantity={item?.accordionItems?.length}
          >
            <WrapperItemAccordion open={sidebarOpen}>
              {item?.accordionItems?.map((accordionItem, index) => (
                <SidebarOption
                  accordionOpen={accordion}
                  sidebarOpen={sidebarOpen}
                  item={accordionItem}
                  path={accordionItem.path}
                  selected={location?.pathname === accordionItem.path}
                  isLastItem={item?.accordionItems.length === index + 1}
                />
              ))}
            </WrapperItemAccordion>
          </SidebarAccordion>
        ) : (
          <ItemSidebar>
            <SidebarOption
              withFullRadius
              sidebarOpen={sidebarOpen}
              path={item.path}
              selected={location?.pathname === item.path}
              item={item}
            />
          </ItemSidebar>
        )
      )}
    </>
  );
};
