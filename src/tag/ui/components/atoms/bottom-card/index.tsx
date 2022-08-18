import React from 'react';
import { Typography } from '@/core/ui/components/atoms';
import { Button } from '@/core/ui/components/molecules';
import { Footer } from './styles';

export const BottomCard: React.FC = () => (
  <Footer>
    <Typography shade={400} size="small" color="grey" type="span">
      Criado em 14/03/1999
    </Typography>
    <Button styleType="outlined" type="button" variant="error">
      Inativar
    </Button>
  </Footer>
);
