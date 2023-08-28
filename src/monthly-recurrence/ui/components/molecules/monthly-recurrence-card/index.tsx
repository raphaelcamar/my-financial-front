import React, { ReactElement } from 'react';
import {
  ContainerCard,
  DataAndTags,
  FooterCard,
  IconWithInfo,
  MultiTags,
  PlusItemBall,
  TagItem,
  WrapperHeader,
} from './styles';
import { Icon, TextEllipsis, Tooltip, Typography } from '@/core/ui/components/atoms';
import { MoreOptions } from '@/core/ui/components/organisms';

export const MonthlyRecurrenceCard = (): ReactElement => {
  const isPayed = true;

  return (
    <ContainerCard>
      <WrapperHeader>
        <TextEllipsis>
          <Typography color="background" shade={600} weight={700}>
            Título do item que pode ser grande o suficiente para ter reticências
          </Typography>
        </TextEllipsis>
        <MoreOptions
          items={[
            { icon: 'pen', onClick: () => null, text: 'Editar' },
            { icon: 'openEye', text: 'Visualizar mais', onClick: () => null },
          ]}
          closeOnSelectIitem
        />
      </WrapperHeader>
      <TextEllipsis rows={3}>
        <Typography size="small">
          Descrição do item que seja grande o suficiente para ter reticências suficiente para ter reticências suficiente
          para ter reticências suficiente para ter reticências
        </Typography>
      </TextEllipsis>
      <FooterCard>
        <Tooltip content="Valor desse mês debitado">
          <IconWithInfo isPayed>
            <Icon icon="moneyBag" size={18} color="primary" shade="500" />
            <Typography size="xxsmall" color="primary" shade={500} weight={700}>
              R$ 42,99
            </Typography>
          </IconWithInfo>
        </Tooltip>
        <DataAndTags>
          <IconWithInfo>
            <Icon icon="calendarIcon" size={18} color="grey" shade="400" />
            <Typography size="xxsmall" color="grey" shade={400} weight={700}>
              Até Dez/2022
            </Typography>
          </IconWithInfo>
          <MultiTags>
            <TagItem hasNoMargin>
              <Icon icon="tag" size={20} color="success" shade="500" />
            </TagItem>

            <TagItem>
              <Icon icon="tag" size={20} color="warning" shade="500" />
            </TagItem>

            <TagItem>
              <Icon icon="tag" size={20} color="primary" shade="500" />
            </TagItem>

            <TagItem>
              <Icon icon="tag" size={20} color="warning" shade="200" />
            </TagItem>

            <TagItem>
              <Icon icon="tag" size={20} color="info" shade="500" />
            </TagItem>
            <PlusItemBall>1+</PlusItemBall>
          </MultiTags>
        </DataAndTags>
      </FooterCard>
    </ContainerCard>
  );
};
