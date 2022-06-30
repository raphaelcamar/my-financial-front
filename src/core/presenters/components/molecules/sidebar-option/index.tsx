import React, { useEffect, useState } from 'react';
import { Icon, Typography } from '@/core/presenters/components/atoms';
import { AvailableIcons, ISidebaroption } from '@/core/domain';
import { Container, WrapperIconText, WrapperIcon } from './styles';

interface ISidebarOption {
  onClick?: () => void;
  selected?: boolean;
  path?: string;
  icon?: AvailableIcons;
  item?: ISidebaroption;
  sidebarOpen: boolean;
  accordionOpen?: boolean;
  withFullRadius?: boolean;
}

export const SidebarOption: React.FC<ISidebarOption> = ({
  onClick,
  path,
  selected,
  sidebarOpen,
  icon,
  item,
  accordionOpen,
  withFullRadius,
}) => {
  const [state, setState] = useState({ color: null, shade: null });

  useEffect(() => {
    if (selected) {
      if (sidebarOpen) {
        setState({
          color: 'grey',
          shade: '50',
        });
      } else {
        setState({
          color: 'primary',
          shade: 'main',
        });
      }
    } else {
      setState({
        color: null,
        shade: null,
      });
    }
  }, [sidebarOpen, selected]);
  return (
    <Container
      open={sidebarOpen}
      selected={selected}
      to={path}
      onClick={onClick || null}
      accordionOpen={accordionOpen}
      withFullRadius={withFullRadius}
    >
      {icon && <Icon icon={icon} />}
      <WrapperIconText accordionOpen={accordionOpen}>
        {item.icon && (
          <WrapperIcon selected={selected} accordionOpen={accordionOpen} open={sidebarOpen}>
            <Icon icon={item.icon as AvailableIcons} color={state.color} shade={state.shade} />
          </WrapperIcon>
        )}
        {sidebarOpen && <Typography color={selected ? 'white' : 'default'}>{item.title}</Typography>}
      </WrapperIconText>
    </Container>
  );
};
