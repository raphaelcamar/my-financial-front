import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useSnackbar } from 'notistack';
import { Icon, Modal, Switch } from '@/core/ui/components/atoms';
import { ColorItems, ColoredBall, Line, ModalContainer, StyledButton, WrapperButtons } from './styles';
import { Input } from '@/core/ui/components/molecules';

interface IAddTagModal {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

const availableShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const availableColors = ['primary', 'error', 'warning', 'grey', 'success', 'info', 'green', 'brown', 'purple', 'skin'];

export const AddTagModal = ({ closeModal }: IAddTagModal): ReactElement => {
  const theme = useTheme();

  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState('primary');
  const [selectedSecondaryColor, setSelectedSecondaryColor] = useState('500');

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setSelectedSecondaryColor('500');
  }, [selectedPrimaryColor]);

  const isLowShadeSelected = Number(selectedSecondaryColor) < 500;

  const createTag = () => {
    try {
      setLoading(true);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possível criar a tag', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open title="Adicionar tag" closeModal={() => closeModal(false)}>
      <ModalContainer>
        <Line>
          <div style={{ width: '80%' }}>
            <Input label="Título" />
          </div>
          <Switch label="Ativo" />
        </Line>
        <Line>
          <div style={{ width: '100%' }}>
            <Input label="Descrição" />
          </div>
        </Line>
        <Line>
          <ColorItems>
            {availableColors.map(item => (
              <>
                <ColoredBall color={theme.palette[item][500]} onClick={() => setSelectedPrimaryColor(item)}>
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
            <StyledButton type="button" onClick={() => createTag()} loading={loading} disabled={loading}>
              Confirmar
            </StyledButton>
          </WrapperButtons>
        </Line>
      </ModalContainer>
    </Modal>
  );
};
