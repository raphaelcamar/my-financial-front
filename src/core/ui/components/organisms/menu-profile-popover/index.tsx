import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Avatar, Icon, Typography } from '@/core/ui/components/atoms';
import { Menu, Popover, Wrapper, PhotoName, WrapperIcon } from './styles';
import { MenuItem } from '@/core/ui/components/molecules';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters';

export const MenuProfilePopover: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { user, logout } = useAccessAndAuthContext();
  const navigate = useNavigate();

  return (
    <Wrapper open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
      <Menu open={menuOpen}>
        <PhotoName>
          <Avatar size={35} url={user?.pictureUrl || user?.name} />
          <Typography>{user?.name}</Typography>
        </PhotoName>
        <WrapperIcon open={menuOpen}>
          <Icon icon="arrowDown" color="primary" shade="500" />
        </WrapperIcon>
      </Menu>
      <Popover open={menuOpen}>
        <MenuItem text="Meu Perfil" icon="person" onClick={() => navigate('/perfil')} />
        <MenuItem text="Sair" icon="logout" onClick={() => logout()} />
      </Popover>
    </Wrapper>
  );
};
