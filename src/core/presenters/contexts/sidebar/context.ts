import { createContext, useContext } from 'react';

type PropsSidebar = {
  open?: boolean;
  handleOpenSidebar: () => void;
};

export const SidebarContext = createContext<PropsSidebar>({} as PropsSidebar);

export const useSidebarContext = (): PropsSidebar => useContext(SidebarContext);
