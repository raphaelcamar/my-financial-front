import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { Button, IconButton } from '@/core/ui/components/molecules';

type IViewOptions = {
  setModal: Dispatch<SetStateAction<boolean>>;
};

export const ViewOptions = ({ setModal }: IViewOptions): ReactElement => (
  <>
    <Button styleType="glass" shade={200} variant="primary">
      Todos
    </Button>
    <Button styleType="glass" variant="grey">
      Cartão
    </Button>
    <Button styleType="glass" variant="grey">
      Assinaturas
    </Button>
    <IconButton
      onClick={() => null}
      icon="squareView"
      color="grey"
      shade="50"
      padding={[8, 14]}
      iconProps={{ color: 'primary', shade: '400' }}
    />
    <IconButton
      onClick={() => null}
      icon="barView"
      color="grey"
      shade="50"
      padding={[8, 14]}
      iconProps={{ color: 'grey', shade: '400' }}
    />
    <Button onClick={() => setModal(true)} styleType="fullfiled" variant="primary">
      Adicionar
    </Button>
  </>
);
