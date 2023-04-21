import React, { ReactElement, useState } from 'react';
import { IconButton } from '@/core/ui/components/molecules/icon-button';
import { ReadonlyInput, WrapperIcon, WrapperIconButtons, WrapperRevenue } from './styles';
import { Icon } from '@/core/ui/components/atoms';
import { useAccessContext } from '@/user/presenters';
import { formatCurrency } from '@/core/utils';
import { CardWallets } from '../card-wallets';

export const MenuIndicators = (): ReactElement => {
  const { user, currentWallet } = useAccessContext();
  const [currencyOpen, setCurrencyOpen] = useState<boolean>(false);

  return (
    <WrapperIconButtons>
      <IconButton icon="bell" color="grey" shade="50" iconProps={{ color: 'primary', shade: '500', size: 22 }} />
      {user && <CardWallets wallets={user?.wallets} selected={currentWallet} />}
      <WrapperRevenue>
        <ReadonlyInput
          type={currencyOpen ? 'text' : 'password'}
          readOnly
          value={formatCurrency(currentWallet?.value || 0, true)}
        />
        <WrapperIcon onClick={() => setCurrencyOpen(!currencyOpen)}>
          <Icon icon={currencyOpen ? 'openEye' : 'closeEye'} color="primary" shade="500" />
        </WrapperIcon>
      </WrapperRevenue>
    </WrapperIconButtons>
  );
};
