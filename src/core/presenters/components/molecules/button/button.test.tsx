import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Button } from './index';
import { ProvideTheme } from '@/core/tests/mocks';
import { main as theme } from '@/core/presenters/contexts/theme/themes/main';

describe('Button Unit test', () => {
  test('Should be able to render a Button with error variant', () => {
    render(ProvideTheme(<Button variant="error" />));

    const button = screen.getByTestId('styled-button');
    expect(button).toHaveStyle(`background: ${theme.palette.error.main}`);
    expect(button).toHaveStyle(`color: ${theme.palette.grey[100]}`);
  });

  test('Should be able to render a Button with outlined variant', () => {
    render(ProvideTheme(<Button variant="outlined" />));

    const button = screen.getByTestId('styled-button');

    expect(button).toHaveStyle(`background: ${theme.palette.background.paper}`);
    expect(button).toHaveStyle(`color: ${theme.palette.primary.main}`);
    expect(button).toHaveStyle(`border: 2px solid ${theme.palette.primary.main}`);
  });

  test('Should be able to render a Button with fullfiled variant', () => {
    render(ProvideTheme(<Button variant="fullfiled" />));

    const button = screen.getByTestId('styled-button');

    expect(button).toHaveStyle(`background: ${theme.palette.primary.main}`);
  });

  test('Should be able to render a Button with outlinedError variant', () => {
    render(ProvideTheme(<Button variant="outlinedError" />));

    const button = screen.getByTestId('styled-button');

    expect(button).toHaveStyle(`background: ${theme.palette.background.paper}`);
    expect(button).toHaveStyle(`color: ${theme.palette.error.main}`);
    expect(button).toHaveStyle(`border: 2px solid ${theme.palette.error.main}`);
  });

  test('Should not be able to render a icon if the props contains a icon', () => {
    render(ProvideTheme(<Button variant="outlinedError" />));
    const iconButton = screen.queryByTestId('icon-button');

    expect(iconButton).not.toBeInTheDocument();
  });

  test('Should be able to render a icon if the props contains a icon', () => {
    render(ProvideTheme(<Button variant="outlinedError" icon="bellBall" />));
    const iconButton = screen.queryByTestId('icon-button');

    expect(iconButton).toBeTruthy();
  });
});
