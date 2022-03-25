/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import { Grid as MuiGrid, GridProps } from '@mui/material';

type PropsInput = React.HTMLAttributes<HTMLDivElement> & GridProps;

export const Grid = forwardRef<any, PropsInput>(({ className, ...props }, ref) => (
  <MuiGrid className={className} ref={ref} {...props} />
));
