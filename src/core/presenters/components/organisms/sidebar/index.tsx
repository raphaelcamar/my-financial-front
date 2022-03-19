import React from 'react';
import { SidebarMenu } from '../sidebar-menu';
import { useStyles } from './styles';

export const Sidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.header}>My Financial</div>
      <SidebarMenu />
    </div>
  );
};
