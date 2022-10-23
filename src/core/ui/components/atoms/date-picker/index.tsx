/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { ReactElement, useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';
import { ButtonWrapper, Container, DateOption, Header } from './styles';
import { Icon } from '../icon';
import { Typography } from '../typography';
import { getMonthByIndex } from '@/transaction/utils';

type IDatePicker = ReactDatePickerProps;

type VoidFunction = () => void;

export const DatePicker = ({ ...props }: IDatePicker): React.ReactElement => {
  const [hoverColor, setHoverColor] = useState({ placement: null });

  const renderYearSelector = (
    monthDate: Date,
    decreaseYear: VoidFunction,
    increaseYear: VoidFunction
  ): ReactElement => (
    <DateOption>
      <ButtonWrapper
        type="button"
        onClick={decreaseYear}
        onMouseEnter={() => setHoverColor({ placement: 'left-year' })}
        onMouseLeave={() => setHoverColor({ placement: null })}
      >
        <Icon icon="arrowLeft" color={hoverColor?.placement === 'left-year' ? 'primary' : 'grey'} shade="500" />
      </ButtonWrapper>
      <Typography type="h3" size="small">
        {monthDate.getFullYear()}
      </Typography>
      <ButtonWrapper
        disabled
        type="button"
        onClick={increaseYear}
        onMouseEnter={() => setHoverColor({ placement: 'right-year' })}
        onMouseLeave={() => setHoverColor({ placement: null })}
      >
        <Icon icon="arrowRight" color={hoverColor?.placement === 'right-year' ? 'primary' : 'grey'} shade="500" />
      </ButtonWrapper>
    </DateOption>
  );

  const renderMonthSelector = (
    monthDate: Date,
    decreaseMonth: VoidFunction,
    increaseMonth: VoidFunction
  ): ReactElement => (
    <DateOption>
      <ButtonWrapper
        type="button"
        onClick={decreaseMonth}
        onMouseEnter={() => setHoverColor({ placement: 'left-month' })}
        onMouseLeave={() => setHoverColor({ placement: null })}
      >
        <Icon icon="arrowLeft" color={hoverColor?.placement === 'left-month' ? 'primary' : 'grey'} shade="500" />
      </ButtonWrapper>
      <Typography type="h3" size="small">
        {getMonthByIndex(monthDate.getMonth())?.month}
      </Typography>
      <ButtonWrapper
        type="button"
        onClick={increaseMonth}
        onMouseEnter={() => setHoverColor({ placement: 'right-month' })}
        onMouseLeave={() => setHoverColor({ placement: null })}
      >
        <Icon icon="arrowRight" color={hoverColor?.placement === 'right-month' ? 'primary' : 'grey'} shade="500" />
      </ButtonWrapper>
    </DateOption>
  );

  return (
    <Container>
      <ReactDatePicker
        renderCustomHeader={({ decreaseMonth, increaseMonth, increaseYear, decreaseYear, monthDate }) => (
          <Header>
            {renderYearSelector(monthDate, decreaseYear, increaseYear)}
            {renderMonthSelector(monthDate, decreaseMonth, increaseMonth)}
          </Header>
        )}
        locale={ptBR}
        dateFormat="dd/MM/yyyy"
        {...props}
        dayClassName={() => 'day'}
      />
    </Container>
  );
};
