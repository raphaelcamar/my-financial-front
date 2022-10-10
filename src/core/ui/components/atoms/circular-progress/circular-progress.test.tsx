import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CircularProgress } from '.';
import { mainTheme as theme } from '@/core/presenters/contexts/styled-theme/themes/main';
import { ProvideStyledTheme } from '@/core/tests/mocks';

describe('CircularProgress - Unit test', () => {
  test('Should be able to render CircularProgress with default color (grey) and default size (10px)', () => {
    render(ProvideStyledTheme(<CircularProgress />));

    const circularProgress = screen.getAllByTestId('circular-progress')?.[0];

    expect(circularProgress).toHaveStyle(`background: ${theme.palette.grey[50]}`);
    expect(circularProgress).toHaveStyle('width: 10px');
    expect(circularProgress).toHaveStyle('height: 10px');
    expect(circularProgress).toBeInTheDocument();
  });

  test('Should be able to render CircularProgress with green color (grey) and size 15px', () => {
    const DEFAULT_SIZE = 15;
    render(ProvideStyledTheme(<CircularProgress color="green" size={DEFAULT_SIZE} />));

    const circularProgress = screen.getAllByTestId('circular-progress')?.[0];

    expect(circularProgress).toHaveStyle(`background: ${theme.palette.green[500]}`);
    expect(circularProgress).toHaveStyle(`width: ${DEFAULT_SIZE}px`);
    expect(circularProgress).toHaveStyle(`height: ${DEFAULT_SIZE}px`);
  });

  test('Should be able to render all CircularProgress with default values', () => {
    render(ProvideStyledTheme(<CircularProgress />));

    const circularProgress = screen.getAllByTestId('circular-progress');
    const firstElement = circularProgress?.[0];

    expect(circularProgress.length).toBe(4);
    expect(firstElement).toHaveStyle(`background: ${theme.palette.grey[50]}`);
    expect(firstElement).toHaveStyle('width: 10px');
    expect(firstElement).toHaveStyle('height: 10px');
  });
});
