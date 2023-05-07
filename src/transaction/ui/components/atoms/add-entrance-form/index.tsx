import React, { ReactElement } from 'react';
import { Input } from '@/core/ui/components/molecules';

type AddEntranceForm = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddEntranceForm = ({ onClose }: AddEntranceForm): ReactElement => (
  <>
    <Input label="Teste" />
    <Input label="Teste" />
    <Input label="Teste" />
    <Input label="Teste" />
    <Input label="Teste" />
  </>
);
