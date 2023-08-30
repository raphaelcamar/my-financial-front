import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AvailableIcons, Icon, Typography } from '@/core/ui/components/atoms';
import { Chip } from '@/core/ui/components/molecules';
import { ISidebaroption } from '@/core/domain';
import { Container, WrapperIconText, WrapperIcon, WrapperTypography, StyledLink } from './styles';

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
    <StyledLink to={path}>
      <Container
        open={sidebarOpen}
        selected={selected}
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
              <Typography color={selected ? 'primary' : 'grey'} shade={500}>
                {item.title}
              </Typography>
              {item?.soon && <Chip color="warning">Em breve</Chip>}
            </WrapperTypography>
          )}
        </WrapperIconText>
      </Container>
    </StyledLink>
  );
};
