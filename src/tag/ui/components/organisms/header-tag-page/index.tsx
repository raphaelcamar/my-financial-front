/* eslint-disable no-return-await */
import React, { useState } from 'react';
import { FilterTag } from '@/tag/ui/components/atoms';
import { Container, Filter } from './styles';
import { Button } from '@/core/ui/components/molecules';
import { useTagContext } from '@/tag/presenters/contexts';
import { ModalCreateTag } from '../modal-create-tag';

export const HeaderTagPage: React.FC = () => {
  const { setCurrentViewTag, currentViewTag } = useTagContext();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Filter>
      <FilterTag />
      <Container>
        <Button
          styleType="glass"
          shade={!currentViewTag ? 200 : 500}
          variant={!currentViewTag ? 'primary' : 'grey'}
          onClick={async () => await setCurrentViewTag(null)}
        >
          Todos
        </Button>
        <Button
          styleType="glass"
          shade={currentViewTag === 'active' ? 200 : 500}
          variant={currentViewTag === 'active' ? 'primary' : 'grey'}
          onClick={async () => await setCurrentViewTag('active')}
        >
          Ativas
        </Button>
        <Button
          styleType="glass"
          shade={currentViewTag === 'inactive' ? 200 : 500}
          variant={currentViewTag === 'inactive' ? 'primary' : 'grey'}
          onClick={() => setCurrentViewTag('inactive')}
        >
          Inativas
        </Button>
        <Button onClick={() => setModalOpen(true)} styleType="fullfiled" variant="primary">
          Adicionar
        </Button>
      </Container>
      <ModalCreateTag modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Filter>
  );
};
