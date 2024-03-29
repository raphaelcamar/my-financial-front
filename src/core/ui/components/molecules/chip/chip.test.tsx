import { render, screen } from '@testing-library/react';
import React from 'react';
import { Chip } from '@/core/ui/components/molecules';
import { ProvideStyledTheme } from '@/core/tests/mocks';
import '@testing-library/jest-dom';
import { mainTheme as theme } from '@/core/presenters/contexts/styled-theme/themes/main';

describe('Chip unit test', () => {
  test('Should be able to render the chip with the success variant', () => {
    render(ProvideStyledTheme(<Chip color="success">Teste</Chip>));

    const chip = screen.getByTestId('chip');
    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.success[100]}`);
  });

  test('Should be able to render the chip with the error variant', () => {
    render(ProvideStyledTheme(<Chip color="error">Teste</Chip>));

    const chip = screen.getByTestId('chip');
    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.error[100]}`);
  });

  test('Should be able to render the chip with the info variant', () => {
    render(ProvideStyledTheme(<Chip color="info">Teste</Chip>));

    const chip = screen.getByTestId('chip');
    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.info[100]}`);
  });

  test('Should be able to render the chip with the warning variant', () => {
    render(ProvideStyledTheme(<Chip color="warning">Teste</Chip>));

    const chip = screen.getByTestId('chip');
    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.warning[100]}`);
  });

  test('Should be able to render the chip and change the width', () => {
    render(ProvideStyledTheme(<Chip color="warning">Teste</Chip>));

    const chip = screen.getByTestId('chip');
    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.warning[100]}`);
  });
});
