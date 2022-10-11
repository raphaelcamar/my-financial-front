import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ProvideStyledTheme } from '@/core/tests/mocks';
import { Checkbox } from '.';
import '@testing-library/jest-dom';

describe('Checkbox - Unit test', () => {
  test('Should be able to render the checkbox and the label', () => {
    render(ProvideStyledTheme(<Checkbox label="checkbox" />));

    const label = screen.getByTestId('checkbox-label');

    expect(label).toBeInTheDocument();
  });

  test('Should be able to click in the label, and change checkbox', () => {
    render(ProvideStyledTheme(<Checkbox label="test click" />));

    const label = screen.getByTestId('checkbox-label');
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;

    fireEvent.click(label);
    expect(checkbox.checked).toBeTruthy();
  });
});
