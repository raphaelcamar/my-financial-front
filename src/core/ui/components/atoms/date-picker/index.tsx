/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// const defaultProps: Partial<ReactDatePickerProps> = {
//   autoFocus: true,
// };

// type IDatePicker = ReactDatePickerProps & typeof defaultProps;
type IDatePicker = ReactDatePickerProps;

export const DatePicker = ({ ...props }: IDatePicker): React.ReactElement => <ReactDatePicker {...props} />;

// DatePicker.defaultProps = defaultProps;
