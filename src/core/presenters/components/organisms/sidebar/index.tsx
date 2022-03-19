import { useTheme } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion, Icon, Typography } from '@/core/presenters/components/atoms';
import { ButtonLinkMenu, ButtonMenu } from '@/core/presenters/components/molecules';

import { useStyles } from './styles';
import { AvailableIcons } from '@/core/domain';

const sidebarOptions = [
  {
    isAccordion: false,
    icon: 'dashboard',
    title: 'Visão geral',
    path: '/',
    accordionItems: [],
  },
];

export const Sidebar: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  return (
    <div className={classes.container}>
      <div className={classes.header}>My Financial</div>
      <div>
        {sidebarOptions.map(item =>
          item.isAccordion ? (
            <Accordion>
              <ButtonMenu isAccordion={item.isAccordion}>{item.title}</ButtonMenu>
              <div className={classes.line}>
                {item?.accordionItems?.map(accordionItem => (
                  <ButtonLinkMenu path={accordionItem.path} selected={location.pathname === accordionItem.path}>
                    <div className={classes.wrapperIconText}>
                      {accordionItem.icon && <Icon icon={accordionItem.icon as AvailableIcons} />}
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
                    icon={item.icon as AvailableIcons}
                    color={location.pathname === item.path && theme.palette.grey[50]}
                  />
                )}
                <Typography variant="body1">{item.title}</Typography>
              </div>
            </ButtonLinkMenu>
          )
        )}
      </div>
    </div>
  );
};
