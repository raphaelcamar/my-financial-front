import { useTheme } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion, ButtonLinkMenu, Icon, Typography } from '@/core/presenters/components/atoms';
import { AvailableIcons } from '@/core/presenters/components/atoms/icon/available-icons';
import { ButtonMenu } from '@/core/presenters/components/molecules';
import { useStyles } from './styles';

const sidebarOptions = [
  {
    isAccordion: false,
    icon: 'dashboard',
    title: 'Visão geral',
    path: '/',
    accordionItems: [],
  },
];

export const SidebarMenu: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  return (
    <div>
      {sidebarOptions.map(item =>
        item.isAccordion ? (
          <Accordion>
            <ButtonMenu isAccordion={item.isAccordion}>{item.title}</ButtonMenu>
            <div className={classes.line}>
              {item?.accordionItems?.map(accordionItem => (
                <ButtonLinkMenu path={accordionItem.path} selected={location.pathname === accordionItem.path}>
                  <div className={classes.wrapperIconText}>
                    {accordionItem.icon && <Icon icon={accordionItem.icon as GetIconProps} />}
                    <Typography variant="body1">{accordionItem.title}</Typography>
                  </div>
                </ButtonLinkMenu>
              ))}
            </div>
          </Accordion>
        ) : (
          <ButtonLinkMenu path={item.path} selected={location.pathname === item.path}>
            <div className={classes.wrapperIconText}>
              {item.icon && (
                <Icon
                  icon={item.icon as GetIconProps}
                  color={location.pathname === item.path && theme.palette.grey[50]}
                />
              )}
              <Typography variant="body1">{item.title}</Typography>
            </div>
          </ButtonLinkMenu>
        )
      )}
    </div>
  );
};

// <Accordion>
// <ButtonMenu isAccordion>teste</ButtonMenu>
// <div className={classes.line}>
//   <ButtonLinkMenu path="/">Teste</ButtonLinkMenu>
//   <ButtonLinkMenu path="/">Teste</ButtonLinkMenu>
//   <ButtonLinkMenu path="/">Teste</ButtonLinkMenu>
//   <ButtonLinkMenu path="/">Teste</ButtonLinkMenu>
// </div>
// </Accordion>
// <ButtonMenu>ad</ButtonMenu>
