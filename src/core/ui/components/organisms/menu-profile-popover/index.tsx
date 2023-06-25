import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClickAwayListener, Hide, Icon, Typography } from '@/core/ui/components/atoms';
import { Avatar, MenuItem } from '@/core/ui/components/molecules';
import { Menu, Popover, Wrapper, PhotoName, WrapperIcon, WrapperMenuItem, Border } from './styles';

import { useAccessContext } from '@/user/presenters/contexts/access';

export const MenuProfilePopover: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { user, logout } = useAccessContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Wrapper open={menuOpen} aria-expanded={menuOpen}>
      <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
        <Menu onClick={() => setMenuOpen(!menuOpen)} open={menuOpen} tabIndex={0} role="button" aria-pressed="false">
          <PhotoName>
            <Avatar size={30} url={user?.pictureUrl || user?.name} />
            <Hide breakpoint="md">
              <Typography size="normal">{user?.name}</Typography>
            </Hide>
          </PhotoName>
          <WrapperIcon open={menuOpen}>
            <Icon icon="arrowDown" color="primary" shade="500" />
          </WrapperIcon>
        </Menu>
        <Popover open={menuOpen}>
          <Border />
          <MenuItem hideOnMobile="md" text="Meu Perfil" icon="person" onClick={() => navigate('/perfil')} />
          <MenuItem hideOnMobile="md" text="Minha carteira" icon="wallet" onClick={() => navigate('/perfil')} />
          <WrapperMenuItem>
            <MenuItem hideOnMobile="md" icon="logout" width="49px" onClick={() => handleLogout()} />
          </WrapperMenuItem>
        </Popover>
      </ClickAwayListener>
    </Wrapper>
  );
};
