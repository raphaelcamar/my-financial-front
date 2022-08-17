/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';

// const defaultProps: Partial<ReactDatePickerProps> = {
//   autoFocus: true,
// };

// type IDatePicker = ReactDatePickerProps & typeof defaultProps;
type IDatePicker = ReactDatePickerProps;

export const DatePicker = ({ ...props }: IDatePicker): React.ReactElement => (
  <ReactDatePicker locale={ptBR} dateFormat="dd/MM/yyyy" {...props} />
);

// DatePicker.defaultProps = defaultProps;
