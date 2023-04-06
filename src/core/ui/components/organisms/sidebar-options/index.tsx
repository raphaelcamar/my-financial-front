import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ISidebaroption } from '@/core/domain';
import { ItemSidebar, WrapperItemAccordion } from './styles';
import { SidebarOption, SidebarAccordion } from '@/core/ui/components/molecules';
import { useSidebarContext } from '@/core/presenters/contexts/sidebar';

interface ISidebarOptions {
  sidebarOptions: ISidebaroption[];
}

export const SidebarOptions: React.FC<ISidebarOptions> = ({ sidebarOptions }) => {
  const location = useLocation();
  const [accordion, setAccordion] = useState(false);
  const { open } = useSidebarContext();

  const getMatchedRoute = (items: ISidebaroption[]): boolean => items?.some(item => item.path === location.pathname);

  return (
    <>
      {sidebarOptions.map(item => (
        <div style={{ paddingBottom: 12 }}>
          {item?.isAccordion ? (
            <SidebarAccordion
              open={accordion}
              key={item.id}
              setOpen={setAccordion}
              sidebarOpen={open}
              icon={item?.icon}
              titleAccordion={item?.title}
              hasMatchedRoute={getMatchedRoute(item?.accordionItems)}
              quantity={item?.accordionItems?.length}
            >
              <WrapperItemAccordion open={open}>
                {item?.accordionItems?.map((accordionItem, index) => (
                  <SidebarOption
                    accordionOpen={accordion}
                    sidebarOpen={open}
                    key={accordionItem.id}
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
                sidebarOpen={open}
                path={item.path}
                selected={location?.pathname === item.path}
                item={item}
              />
            </ItemSidebar>
          )}
        </div>
      ))}
    </>
  );
};
