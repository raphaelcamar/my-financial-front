import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps,
} from '@mui/material';
import React from 'react';

export const CircularProgress: React.FC<CircularProgressProps> = ({
  ...props
}) => <MuiCircularProgress {...props} />;
