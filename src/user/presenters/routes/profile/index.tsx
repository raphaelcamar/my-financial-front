import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { CircularProgress } from '@/core/ui/components/atoms';

const ProfilePage = React.lazy(
  async () => import(/* webpackChunkName: "ProfilePage" */ '@/user/ui/pages/profile-page')
);

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
