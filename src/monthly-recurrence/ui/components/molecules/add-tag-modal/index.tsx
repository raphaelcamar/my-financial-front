import React, { Dispatch, ReactElement, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Icon, Modal, Switch } from '@/core/ui/components/atoms';
import { ColorItems, ColoredBall, Line, ModalContainer, StyledButton, WrapperButtons } from './styles';
import { Input } from '@/core/ui/components/molecules';
import { CreateTagValidator } from '@/monthly-recurrence/data/use-cases/validators';
import { Tag } from '@/monthly-recurrence/domain';
import { useAccessContext } from '@/user/presenters';
import { MonthlyRecurrenceRepositoryData } from '@/monthly-recurrence/infra';
import { useMonthlyRecurrenceContext } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';

interface IAddTagModal {
  closeModal: Dispatch<SetStateAction<boolean>>;
  defaultValues?: Tag;
}

const availableShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const availableColors = ['primary', 'error', 'warning', 'grey', 'success', 'info', 'green', 'brown', 'purple', 'skin'];

export const AddTagModal = ({ closeModal, defaultValues }: IAddTagModal): ReactElement => {
  const theme = useTheme();

  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState('primary');
  const [selectedSecondaryColor, setSelectedSecondaryColor] = useState('500');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CreateTagValidator) });

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const { currentWallet } = useAccessContext();
  const { getTags } = useMonthlyRecurrenceContext();

  const monthlyClosingRepository = useMemo(() => new MonthlyRecurrenceRepositoryData(), []);

  useEffect(() => {
    setSelectedSecondaryColor('500');
  }, [selectedPrimaryColor]);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
      setSelectedPrimaryColor(defaultValues.color);
      setSelectedSecondaryColor(String(defaultValues.shade));
    }
  }, [defaultValues]);

  const isLowShadeSelected = Number(selectedSecondaryColor) < 500;

  const handleSubmitForm = async (data: Tag) => {
    try {
      const tag = new Tag({
        _id: defaultValues.id,
        ...data,
        color: selectedPrimaryColor,
        shade: selectedSecondaryColor,
      });
      setLoading(true);

      if (defaultValues) {
        await monthlyClosingRepository.editTag(tag, currentWallet.id);
      } else {
        await monthlyClosingRepository.createTag(tag, currentWallet.id);
      }
      enqueueSnackbar(`Tag ${defaultValues ? 'editada' : 'criada'} com sucesso!`, {
        variant: 'success',
      });

      await getTags(1, currentWallet.id);
      closeModal(false);
    } catch (err) {
      enqueueSnackbar(err?.message || `Não foi possível ${defaultValues ? 'editar' : 'criar'} a tag`, {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open title="Adicionar tag" closeModal={() => closeModal(false)}>
      <ModalContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <Line>
          <div style={{ width: '80%' }}>
            <Input
              label="Título"
              {...register('title')}
              error={!!errors?.title?.message}
              helperText={errors?.title?.message as string}
            />
          </div>
          <Switch label="Ativo" {...register('active')} />
        </Line>
        <Line>
          <div style={{ width: '100%' }}>
            <Input
              label="Descrição"
              {...register('description')}
              error={!!errors?.description?.message}
              helperText={errors?.description?.message as string}
            />
          </div>
        </Line>
        <Line>
          <ColorItems>
            {availableColors.map(item => (
              <>
                <ColoredBall
                  type="button"
                  color={theme.palette[item][500]}
                  onClick={() => setSelectedPrimaryColor(item)}
                >
                  {selectedPrimaryColor === item && <Icon icon="check" color="grey" shade="50" />}
                </ColoredBall>
              </>
            ))}
          </ColorItems>
        </Line>
        <Line>
          <ColorItems>
            {selectedPrimaryColor && (
              <>
                {availableShades.map(item => (
                  <>
                    <ColoredBall
                      type="button"
                      color={theme.palette?.[selectedPrimaryColor]?.[item]}
                      onClick={() => setSelectedSecondaryColor(item)}
                    >
                      {selectedSecondaryColor === item && (
                        <Icon icon="check" color="grey" shade={isLowShadeSelected ? '900' : '200'} />
                      )}
                    </ColoredBall>
                  </>
                ))}
              </>
            )}
          </ColorItems>
        </Line>
        <Line>
          <WrapperButtons>
            <StyledButton
              type="button"
              styleType="glass"
              variant="error"
              onClick={() => closeModal(false)}
              disabled={loading}
            >
              Cancelar
            </StyledButton>
            <StyledButton type="submit" loading={loading} disabled={loading}>
              Confirmar
            </StyledButton>
          </WrapperButtons>
        </Line>
      </ModalContainer>
    </Modal>
  );
};
