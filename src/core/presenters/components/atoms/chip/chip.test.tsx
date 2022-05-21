import { render, screen } from '@testing-library/react';
import React from 'react';
import { Chip } from '@/core/presenters/components/atoms';
import { ProvideTheme } from '@/core/tests/mocks';
import '@testing-library/jest-dom';
import { main as theme } from '@/core/presenters/contexts/theme/themes/main';

describe('Chip unit test', () => {
  test('Should be able to render the chip with the success variant', () => {
    render(ProvideTheme(<Chip color="success">Teste</Chip>));

    const chip = screen.getByTestId('chip');
    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.success[100]}`);
  });

  test('Should be able to render the chip with the error variant', () => {
    render(ProvideTheme(<Chip color="error">Teste</Chip>));

    const chip = screen.getByTestId('chip');
    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.error[100]}`);
  });

  test('Should be able to render the chip with the info variant', () => {
    render(ProvideTheme(<Chip color="info">Teste</Chip>));

    const chip = screen.getByTestId('chip');
    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.info[100]}`);
  });

  test('Should be able to render the chip with the warning variant', () => {
    render(ProvideTheme(<Chip color="warning">Teste</Chip>));

    const chip = screen.getByTestId('chip');

    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.warning[100]}`);
  });

  test('Should be able to render the chip and change the width', () => {
    render(ProvideTheme(<Chip color="warning">Teste</Chip>));

    const chip = screen.getByTestId('chip');

    const linkElement = screen.getByText(/Teste/i);

    expect(chip).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(chip).toHaveStyle(`background: ${theme.palette.warning[100]}`);
  });
});
