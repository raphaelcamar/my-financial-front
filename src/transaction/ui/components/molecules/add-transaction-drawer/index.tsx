import React, { ReactElement } from 'react';
import { Drawer } from '@/core/ui/components/organisms';
import { IconButton } from '@/core/ui/components/molecules';
import { BodyForm, DrawerHeader } from './styles';
import { Tabs, Typography, TabItem } from '@/core/ui/components/atoms';
import { AddEntranceForm, AddSpentForm } from '../../atoms';

type AddTransactionDrawerProps = {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddTransactionDrawer = ({ open, setOpenModal }: AddTransactionDrawerProps): ReactElement => {
  const tabs: TabItem[] = [
    {
      content: <AddSpentForm onClose={setOpenModal} />,
      id: '1',
      title: 'Despesas',
    },
    {
      content: <AddEntranceForm onClose={setOpenModal} />,
      id: '2',
      title: 'Receitas',
    },
  ];

  return (
    <Drawer
      open={open}
      actionTop={
        <DrawerHeader>
          <Typography type="h2" size="xlarge">
            Adicionar transação
          </Typography>
          <IconButton
            icon="close"
            onClick={() => setOpenModal(false)}
            iconProps={{ color: 'background', shade: 'paper' }}
          />
        </DrawerHeader>
      }
    >
      <BodyForm>
        <Tabs tabs={tabs} />
      </BodyForm>
    </Drawer>
  );
};
