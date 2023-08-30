import React, { ReactElement, useState } from 'react';
import { IconButton } from '@/core/ui/components/molecules/icon-button';
import { ReadonlyInput, WrapperIcon, WrapperIconButtons, WrapperRevenue } from './styles';
import { Icon } from '@/core/ui/components/atoms';
import { useAccessContext } from '@/user/presenters';
import { formatCurrency } from '@/core/utils';
import { CardWallets } from '../card-wallets';

export const MenuIndicators = (): ReactElement => {
  const { user, currentWallet, walletValue } = useAccessContext();

  const [currencyOpen, setCurrencyOpen] = useState<boolean>(true);

  // useEffect(() => {
  //   if (connection) {
  //     connection.on('update-wallet-value', (payload: { value: number }) => {
  //       setNewWalletValue(payload.value);
  //     });
  //   }
  // }, [connection]);

  return (
    <WrapperIconButtons>
      <IconButton
        icon="bellBall"
        color="grey"
        shade="200"
        iconProps={{ color: 'primary', shade: '500', size: 18 }}
        aria-label="Notificações"
      />
      {user && <CardWallets wallets={user?.wallets} selected={currentWallet} />}
      <WrapperRevenue>
        <ReadonlyInput
          type={currencyOpen ? 'text' : 'password'}
          readOnly
          aria-label="Valor da carteira"
          value={formatCurrency(walletValue || 0, true)}
        />
        <WrapperIcon
          onClick={() => setCurrencyOpen(!currencyOpen)}
          aria-label={currencyOpen ? 'Mostrar valor da carteira' : 'Esconder valor da carteira'}
        >
          <Icon icon={currencyOpen ? 'openEye' : 'closeEye'} color="primary" shade="500" size={16} />
        </WrapperIcon>
      </WrapperRevenue>
    </WrapperIconButtons>
  );
};
