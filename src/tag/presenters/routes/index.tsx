import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { CircularProgress } from '@/core/ui/components/atoms';

const TagPage = React.lazy(async () => import(/* webpackChunkName: "TagPage" */ '@/tag/ui/pages/tag-page'));

export const TagRoutes: RouteObject[] = [
  {
    path: '/tags',
    element: (
      <Suspense fallback={<CircularProgress color="info" />}>
        <TagPage />
      </Suspense>
    ),
  },
];

export const TagRoutesComponent = (): React.ReactElement => useRoutes(TagRoutes);
