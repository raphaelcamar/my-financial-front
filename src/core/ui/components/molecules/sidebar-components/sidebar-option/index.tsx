import React, { useEffect, useState } from 'react';
import { Icon, Typography } from '@/core/ui/components/atoms';
import { Chip } from '@/core/ui/components/molecules';
import { AvailableIcons, ISidebaroption } from '@/core/domain';
import { Container, WrapperIconText, WrapperIcon, WrapperTypography } from './styles';

interface ISidebarOption {
  selected?: boolean;
  path?: string;
  item?: ISidebaroption;
  sidebarOpen: boolean;
  accordionOpen?: boolean;
  withFullRadius?: boolean;
  isLastItem?: boolean;
}

export const SidebarOption: React.FC<ISidebarOption> = ({
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
      soon={item?.soon || null}
      accordionOpen={accordionOpen}
      withFullRadius={withFullRadius}
      isLastItem={isLastItem}
    >
      <WrapperIconText accordionOpen={accordionOpen}>
        {item?.icon && (
          <WrapperIcon selected={selected} accordionOpen={accordionOpen} open={sidebarOpen}>
            <Icon icon={item.icon as AvailableIcons} color={state.color} shade={state.shade} size={16} />
          </WrapperIcon>
        )}
        {sidebarOpen && (
          <WrapperTypography>
            <Typography color={selected ? 'primary' : 'default'}>{item.title}</Typography>
            {item?.soon && <Chip color="warning">Em breve</Chip>}
          </WrapperTypography>
        )}
      </WrapperIconText>
    </Container>
  );
};
