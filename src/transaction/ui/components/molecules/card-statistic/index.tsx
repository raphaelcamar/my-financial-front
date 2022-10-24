import React from 'react';
import { AvailableIcons, Paper, TextEllipsis, Typography } from '@/core/ui/components/atoms';
import { Container, Content } from './styles';
import { formatCurrency } from '@/core/utils';
import { CardFlag } from '@/transaction/ui/components/atoms';
import { WrapperLoader } from '@/core/ui/components/molecules';

interface ICardStatistic {
  title: string;
  price: number;
  description: string;
  icon: AvailableIcons;
  loading?: boolean;
  allowNegative?: boolean;
  isNegative?: boolean;
}

export const CardStatistic: React.FC<ICardStatistic> = ({
  title,
  price,
  description,
  icon,
  loading,
  allowNegative,
  isNegative,
}) => (
  <Container>
    <Paper density={1} noRadiusIn="right" fullWidth>
      <WrapperLoader loading={loading} size={10} color="primary">
        <Content>
          <TextEllipsis rows={1}>
            <Typography weight={600} size="normal">
              {title}
            </Typography>
          </TextEllipsis>
          <TextEllipsis rows={1}>
            <Typography size="xlarge" color={isNegative ? 'error' : 'info'} weight={700}>
              {formatCurrency(price || 0, allowNegative) || '-'}
            </Typography>
          </TextEllipsis>
          <TextEllipsis rows={1}>
            <Typography size="xsmall" weight={500} color="grey" shade={400}>
              {description}
            </Typography>
          </TextEllipsis>
        </Content>
      </WrapperLoader>
    </Paper>
    <CardFlag icon={icon} density={1} />
  </Container>
);
