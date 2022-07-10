import React from 'react';
import { Paper, Typography } from '@/core/ui/components/atoms';
import { Container, Content, TextEllipsis } from './styles';
import { formatCurrency } from '@/core/utils';
import { CardFlag } from '@/transaction/ui/components/atoms';
import { AvailableIcons } from '@/core/domain';
import { WrapperLoader } from '@/core/ui/components/molecules';

interface ICardStatistic {
  title: string;
  price: number;
  description: string;
  icon: AvailableIcons;
  loading?: boolean;
}

export const CardStatistic: React.FC<ICardStatistic> = ({ title, price, description, icon, loading }) => (
  <Container>
    <Paper density={1} noRadiusIn="right" fullWidth>
      <WrapperLoader loading={loading} size={10} color="primary">
        <Content>
          <Typography weight={600} size="normal">
            {title}
          </Typography>
          <TextEllipsis>
            <Typography size="xlarge" color="info" weight={700} ellipsis>
              {formatCurrency(price)}
            </Typography>
          </TextEllipsis>
          <TextEllipsis>
            <Typography size="xsmall" weight={500} color="secondary" ellipsis>
              {description}
            </Typography>
          </TextEllipsis>
        </Content>
      </WrapperLoader>
    </Paper>
    <CardFlag icon={icon} density={1} />
  </Container>
);
