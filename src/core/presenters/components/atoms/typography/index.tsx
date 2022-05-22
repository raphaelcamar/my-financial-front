import React from 'react';

import { Typography as MuiTypography, TypographyProps } from '@mui/material';

export const Typography: React.FC<TypographyProps> = ({ ...props }) => (
  <MuiTypography {...props} className={props.className} />
);
