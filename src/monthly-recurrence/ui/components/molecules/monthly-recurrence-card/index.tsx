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
import { MonthlyRecurrence } from '@/monthly-recurrence/domain';
import { formatCurrency, formatDate } from '@/core/utils';

interface IMonthlyRecurrenceCard {
  monthlyRecurrenceItem: MonthlyRecurrence;
}

export const MonthlyRecurrenceCard = ({ monthlyRecurrenceItem }: IMonthlyRecurrenceCard): ReactElement => {
  const today = new Date().getDate();
  const isPayed = today >= monthlyRecurrenceItem.dueDate;

  const tags = [...monthlyRecurrenceItem.tags];

  const firstTag = tags.shift();
  const fiveTags = tags.slice(0, 5);
  const restOfTagsLength = tags.length - 5;

  return (
    <ContainerCard>
      <WrapperHeader>
        <TextEllipsis>
          <Typography color="background" shade={600} weight={700}>
            {monthlyRecurrenceItem.title}
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
        <Typography size="small">{monthlyRecurrenceItem.description}</Typography>
      </TextEllipsis>
      <FooterCard>
        <Tooltip content={isPayed ? 'Valor desse mês debitado' : 'A debitar'}>
          <IconWithInfo isPayed={isPayed}>
            <Icon icon="moneyBag" size={18} color={isPayed ? 'primary' : 'grey'} shade={isPayed ? '500' : '400'} />
            <Typography size="xxsmall" color={isPayed ? 'primary' : 'grey'} shade={isPayed ? 500 : 400} weight={700}>
              {formatCurrency(monthlyRecurrenceItem.value)}
            </Typography>
          </IconWithInfo>
        </Tooltip>
        <DataAndTags>
          <IconWithInfo>
            <Icon icon="calendarIcon" size={18} color="grey" shade="400" />
            <Typography size="xxsmall" color="grey" shade={400} weight={700}>
              {monthlyRecurrenceItem.expirationDate
                ? `Até ${formatDate(monthlyRecurrenceItem.expirationDate, 'MMM/yyyy')}`
                : 'Sem expiração'}
            </Typography>
          </IconWithInfo>
          <MultiTags>
            <TagItem hasNoMargin>
              <Icon icon="tag" size={20} color={firstTag.color} shade="500" />
            </TagItem>
            {fiveTags.map(tag => (
              <TagItem>
                <Icon icon="tag" size={20} color={tag.color} shade="500" />
              </TagItem>
            ))}
            {restOfTagsLength > 0 ? <PlusItemBall>{restOfTagsLength}</PlusItemBall> : <></>}
          </MultiTags>
        </DataAndTags>
      </FooterCard>
    </ContainerCard>
  );
};
