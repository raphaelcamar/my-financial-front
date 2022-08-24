import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { CircularProgress } from '@/core/ui/components/atoms';
import { ProfilePage } from '@/user/ui/pages';

export const ProfileRoutes: RouteObject[] = [
  {
    path: '/perfil',
    element: (
      <Suspense fallback={<CircularProgress color="info" />}>
        <ProfilePage />
      </Suspense>
    ),
  },
];

export const ProfileRoutesComponent = (): React.ReactElement => useRoutes(ProfileRoutes);
