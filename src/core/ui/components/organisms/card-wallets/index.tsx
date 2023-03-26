import React, { ReactElement, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Wallet } from '@/user/domain';
import { ClickAwayListener } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules/icon-button';
import { BodyItem, Container, Item } from './styles';
import { formatCurrency } from '@/core/utils';

export type ICardWallets = {
  selected?: Wallet;
  wallets: Wallet[];
};

export const CardWallets = ({ selected, wallets }: ICardWallets): ReactElement => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [popperElement, setPopperElement] = useState(null);
  const [walletSelected, setWalletSelected] = useState<Wallet>(selected);
  const divRef = useRef<HTMLDivElement>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'preventOverflow',
        options: {
          mainAxis: false,
        },
      },
    ],
  });

  return (
    <>
      <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
        <div style={{ width: '100%' }} ref={divRef}>
          <div ref={setReferenceElement} style={{ width: '100%' }}>
            <IconButton
              icon="wallet"
              color="grey"
              shade="50"
              iconProps={{ color: 'primary', shade: '500', size: 22 }}
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <Container open={menuOpen} ref={setPopperElement} style={{ ...styles.popper }} {...attributes.popper}>
              {wallets?.map(wallet => (
                <>
                  <Item
                    key={wallet.id}
                    selected={Boolean(walletSelected.id === wallet.id)}
                    onClick={() => setWalletSelected(wallet)}
                  >
                    <BodyItem>
                      <h3>{wallet.name}</h3>
                      <span>{formatCurrency(wallet.value)}</span>
                    </BodyItem>
                  </Item>

                  <Item key={wallet.id} selected={false} onClick={() => setWalletSelected(wallet)}>
                    <BodyItem>
                      <h3>{wallet.name}</h3>
                      <span>{formatCurrency(wallet.value)}</span>
                    </BodyItem>
                  </Item>
                </>
              ))}
            </Container>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
};
