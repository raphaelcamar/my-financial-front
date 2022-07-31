import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Avatar, Icon, Typography } from '@/core/ui/components/atoms';
import { Menu, Popover, Wrapper, PhotoName, WrapperIcon, WrapperMenuItem, Border, Text } from './styles';
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
          <Avatar size={30} url={user?.pictureUrl || user?.name} />
          <Text>
            <Typography size="normal">{user?.name}</Typography>
          </Text>
        </PhotoName>
        <WrapperIcon open={menuOpen}>
          <Icon icon="arrowDown" color="primary" shade="500" />
        </WrapperIcon>
      </Menu>
      <Popover open={menuOpen}>
        <Border />
        <MenuItem text="Meu Perfil" icon="person" onClick={() => navigate('/perfil')} />
        <WrapperMenuItem>
          <MenuItem icon="logout" width="49px" onClick={() => logout()} />
        </WrapperMenuItem>
      </Popover>
    </Wrapper>
  );
};
