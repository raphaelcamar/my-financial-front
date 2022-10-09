import { createContext, useContext } from 'react';

type SidebarProps = {
  open?: boolean;
  handleOpenSidebar: () => void;
};

export const SidebarContext = createContext<SidebarProps>({} as SidebarProps);

export const useSidebarContext = (): SidebarProps => useContext(SidebarContext);
