import React, { ReactElement, useState } from 'react';
import { IconButton } from '@/core/ui/components/molecules/icon-button';
import { ReadonlyInput, WrapperIcon, WrapperIconButtons, WrapperRevenue } from './styles';
import { Icon } from '@/core/ui/components/atoms';
import { useAccessContext } from '@/user/presenters';
import { formatCurrency } from '@/core/utils';

export const MenuIndicators = (): ReactElement => {
  const { user } = useAccessContext();
  const [currencyOpen, setCurrencyOpen] = useState<boolean>(false);

  return (
    <WrapperIconButtons>
      <IconButton icon="bell" color="grey" shade="50" iconProps={{ color: 'primary', shade: '500', size: 22 }} />
      <IconButton icon="wallet" color="grey" shade="50" iconProps={{ color: 'primary', shade: '500', size: 22 }} />
      <WrapperRevenue>
        <ReadonlyInput
          type={currencyOpen ? 'text' : 'password'}
          readOnly
          value={formatCurrency(user?.wallets?.[0]?.value)}
        />
        <WrapperIcon onClick={() => setCurrencyOpen(!currencyOpen)}>
          <Icon icon={currencyOpen ? 'openEye' : 'closeEye'} color="primary" shade="500" />
        </WrapperIcon>
      </WrapperRevenue>
    </WrapperIconButtons>
  );
};
