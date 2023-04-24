import React, { ReactElement, useEffect, useState } from 'react';
import { IconButton } from '@/core/ui/components/molecules/icon-button';
import { ReadonlyInput, WrapperIcon, WrapperIconButtons, WrapperRevenue } from './styles';
import { Icon } from '@/core/ui/components/atoms';
import { useAccessContext } from '@/user/presenters';
import { formatCurrency } from '@/core/utils';
import { CardWallets } from '../card-wallets';
import { useSocketContext } from '@/core/presenters/contexts/socket-provider/context';

export const MenuIndicators = (): ReactElement => {
  const { user, currentWallet, setNewWalletValue, walletValue } = useAccessContext();

  const { connection } = useSocketContext();

  const [currencyOpen, setCurrencyOpen] = useState<boolean>(false);

  useEffect(() => {
    if (connection) {
      connection.on('update-wallet-value', (payload: { value: number }) => {
        setNewWalletValue(payload.value);
      });
    }
  }, [connection]);

  return (
    <WrapperIconButtons>
      <IconButton icon="bellBall" color="grey" shade="50" iconProps={{ color: 'primary', shade: '500', size: 24 }} />
      {user && <CardWallets wallets={user?.wallets} selected={currentWallet} />}
      <WrapperRevenue>
        <ReadonlyInput
          type={currencyOpen ? 'text' : 'password'}
          readOnly
          value={formatCurrency(walletValue || 0, true)}
        />
        <WrapperIcon onClick={() => setCurrencyOpen(!currencyOpen)}>
          <Icon icon={currencyOpen ? 'openEye' : 'closeEye'} color="primary" shade="500" />
        </WrapperIcon>
      </WrapperRevenue>
    </WrapperIconButtons>
  );
};
