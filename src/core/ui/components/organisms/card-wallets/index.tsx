import React, { Fragment, ReactElement, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Wallet } from '@/user/domain';
import { ClickAwayListener } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules/icon-button';
import { BodyItem, Circle, Container, Item, Wrapper } from './styles';

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
              iconProps={{ color: 'primary', shade: '500', size: 18 }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Carteira"
            />
            <Container open={menuOpen} ref={setPopperElement} style={{ ...styles.popper }} {...attributes.popper}>
              {wallets?.map(wallet => (
                <Fragment key={wallet.id}>
                  <Item selected={Boolean(walletSelected.id === wallet.id)} onClick={() => setWalletSelected(wallet)}>
                    <Wrapper>
                      <Circle color={wallet.color} />
                      <BodyItem>
                        <h3>{wallet.name}</h3>
                        {/* <span>{formatCurrency(wallet.value, true)}</span> */}
                      </BodyItem>
                    </Wrapper>
                  </Item>
                </Fragment>
              ))}
            </Container>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
};
