import React from 'react';
import { SidebarProvider } from '@/core/presenters/contexts/sidebar';
import { Container } from '@/core/ui/components/organisms';

export const ContainerPage: React.FC = () => (
  <SidebarProvider>
    <Container />
  </SidebarProvider>
);
