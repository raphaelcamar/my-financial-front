import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Tag } from '@/monthly-recurrence/domain/entities';
import { CreateTagValidator } from '@/monthly-recurrence/data/use-cases/validators';
import { ColorProps } from '@/main/styled';
import { Modal, Popover } from '@/core/ui/components/atoms';
import {
  Buttons,
  ChoiceColors,
  Circle,
  ColorTitle,
  StyledButton,
  StyledInput,
  WrapChoicedColor,
  WrapperModal,
} from './styles';
import { Chip, Input } from '@/core/ui/components/molecules';
import { useTagContext } from '@/monthly-recurrence/presenters/contexts';
import { randomId } from '@/core/utils';

interface IModalCreateTag {
  modalOpen?: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const COLORS = ['primary', 'brown', 'error', 'green', 'grey', 'info', 'purple', 'skin', 'success', 'warning'];

export const ModalCreateTag: React.FC<IModalCreateTag> = ({ modalOpen, setModalOpen }) => {
  const [currentColor, setCurrentColor] = useState<keyof ColorProps>('primary');

  const { enqueueSnackbar } = useSnackbar();
  const { create } = useTagContext();

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    reset,
    formState: { errors },
  } = useForm<Tag>({ resolver: yupResolver(CreateTagValidator) });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    resetField('color', {
      defaultValue: 'primary',
    });
  }, []);

  const onSubmit = async (tag: Tag): Promise<void> => {
    try {
      setLoading(true);
      await create({ ...tag, color: currentColor });
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível fazer o login. Tente novamente mais tarde', {
        variant: 'error',
      });
    } finally {
      setCurrentColor('primary');
      setLoading(false);
      reset();
    }
  };

  const handleChangeColor = (color: keyof ColorProps) => {
    setValue('color', color);
    setCurrentColor(color);
  };

  return (
    <Modal closeModal={() => setModalOpen(false)} open={modalOpen} title="Adicione uma Tag">
      <WrapperModal onSubmit={handleSubmit(onSubmit)}>
        <ColorTitle>
          <StyledInput
            label="Título"
            name="title"
            {...register('title')}
            error={!!errors?.title?.message}
            helperText={errors?.title?.message}
          />
          <Popover
            label="Cor"
            size={190}
            withArrowIcon
            displayElement={
              <WrapChoicedColor>
                <Circle color={currentColor} />
                <Chip color={currentColor}>Exemplo</Chip>
              </WrapChoicedColor>
            }
          >
            <ChoiceColors>
              {COLORS.map((color: keyof ColorProps) => (
                <Circle key={randomId()} color={color} onClick={() => handleChangeColor(color)} />
              ))}
            </ChoiceColors>
          </Popover>
        </ColorTitle>

        <Input
          label="Descrição"
          name="description"
          {...register('description')}
          error={!!errors?.description?.message}
          helperText={errors?.description?.message}
        />

        <Buttons>
          <StyledButton type="button" variant="grey" styleType="glass" onClick={() => setModalOpen(false)}>
            Cancelar
          </StyledButton>
          <StyledButton loading={loading} styleType="glass" variant="primary" type="submit">
            Criar tag
          </StyledButton>
        </Buttons>
      </WrapperModal>
    </Modal>
  );
};
