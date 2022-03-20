/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import clsx from 'clsx';
import { Sidebar } from '@/core/presenters/components/organisms';
import { IconSidebarAction } from '../../molecules/icon-sidebar-action';
import { useStyles } from './styles';

export const Container: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div>
      <IconSidebarAction open={open} onClick={() => setOpen(!open)} />
      <Sidebar open={open} />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: !open,
        })}
      >
        <div>teste</div>
      </div>
    </div>
  );
};
