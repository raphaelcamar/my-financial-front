import React, { useEffect, useState } from 'react';
import { Icon, Typography } from '@/core/ui/components/atoms';
import { AvailableIcons, ISidebaroption } from '@/core/domain';
import { Container, WrapperIconText, WrapperIcon } from './styles';

interface ISidebarOption {
  onClick?: () => void;
  selected?: boolean;
  path?: string;
  item?: ISidebaroption;
  sidebarOpen: boolean;
  accordionOpen?: boolean;
  withFullRadius?: boolean;
  isLastItem?: boolean;
}

export const SidebarOption: React.FC<ISidebarOption> = ({
  onClick,
  path,
  selected,
  sidebarOpen,
  item,
  accordionOpen,
  withFullRadius,
  isLastItem,
}) => {
  const [state, setState] = useState({ color: null, shade: null });

  useEffect(() => {
    if (selected) {
      if (sidebarOpen) {
        setState({
          color: 'primary',
          shade: 'main',
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
      isLastItem={isLastItem}
    >
      <WrapperIconText accordionOpen={accordionOpen}>
        {item.icon && (
          <WrapperIcon selected={selected} accordionOpen={accordionOpen} open={sidebarOpen}>
            <Icon icon={item.icon as AvailableIcons} color={state.color} shade={state.shade} size={16} />
          </WrapperIcon>
        )}
        {sidebarOpen && <Typography color={selected ? 'primary' : 'default'}>{item.title}</Typography>}
      </WrapperIconText>
    </Container>
  );
};
