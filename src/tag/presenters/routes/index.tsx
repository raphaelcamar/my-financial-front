import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { CircularProgress } from '@/core/ui/components/atoms';
import { TagPage } from '@/tag/ui';

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
