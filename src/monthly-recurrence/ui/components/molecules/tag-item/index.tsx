import React, { ReactElement, useState } from 'react';
import { BorderLine, Container, TitleAndLinkedItems, WrapperActionButtons, WrapperInfos } from './styles';
import { Typography } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules';

export const TagItem = (): ReactElement => {
  const [showActionButtons, setShowActionButtons] = useState(false);

  return (
    <Container onMouseEnter={() => setShowActionButtons(true)} onMouseLeave={() => setShowActionButtons(false)}>
      <BorderLine />
      <WrapperInfos>
        <TitleAndLinkedItems>
          <Typography size="large" weight={500}>
            Nome da tag
          </Typography>
          <Typography size="xxsmall" color="grey" shade={400}>
            Vinculado a 16 itens
          </Typography>
        </TitleAndLinkedItems>
        <WrapperActionButtons showButton={showActionButtons}>
          <IconButton icon="pen" color="grey" shade="200" iconProps={{ color: 'primary', shade: '500' }} />
          <IconButton icon="trash" color="grey" shade="200" iconProps={{ color: 'primary', shade: '500' }} />
        </WrapperActionButtons>
      </WrapperInfos>
    </Container>
  );
};
