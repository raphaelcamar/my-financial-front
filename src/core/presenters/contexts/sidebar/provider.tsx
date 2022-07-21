import React, { useState } from 'react';
import { SidebarContext } from './context';

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpenSidebar = () => {
    setOpen(!open);
  };

  return <SidebarContext.Provider value={{ open, handleOpenSidebar }}>{children}</SidebarContext.Provider>;
};
