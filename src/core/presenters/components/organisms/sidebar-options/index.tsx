import React from 'react';
import { useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { AvailableIcons, ISidebaroption } from '@/core/domain';
import { useStyles } from './styles';
import { Accordion, Icon, Typography } from '@/core/presenters/components/atoms';
import { ButtonLinkMenu, ButtonMenu } from '@/core/presenters/components/molecules';

interface ISidebarOptions {
  sidebarOptions: ISidebaroption[];
  open: boolean;
}

export const SidebarOptions: React.FC<ISidebarOptions> = ({ sidebarOptions, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  return (
    <>
      {sidebarOptions.map(item =>
        item.isAccordion ? (
          <div className={classes.accordion}>
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
          </div>
        ) : (
          <div className={classes.accordion}>
            <ButtonLinkMenu path={item.path} selected={location.pathname === item.path}>
              <div className={classes.wrapperIconText}>
                {item.icon && (
                  <Icon
                    icon={item.icon as AvailableIcons}
                    color={location.pathname === item.path && theme.palette.grey[50]}
                  />
                )}
                {open && <Typography variant="body1">{item.title}</Typography>}
              </div>
            </ButtonLinkMenu>
          </div>
        )
      )}
    </>
  );
};
