import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { mainTheme as theme } from '@/core/presenters/contexts/styled-theme/themes/main';
import { StyledThemeProvider } from '@/core/presenters/contexts';
import { Input } from '.';

describe('Input integration tests', () => {
  test('Should be able to render input, helper text, and the label', () => {
    const { getByText } = render(
      <StyledThemeProvider>
        <Input label="Label-test" error={false} helperText="helper text" />
      </StyledThemeProvider>
    );

    const inputRoot = screen.getByTestId('input-root');

    expect(inputRoot).toBeInTheDocument();
    expect(getByText(/Label-test/i)).toBeInTheDocument();
    expect(getByText(/helper text/i)).toBeInTheDocument();
  });

  test('Should be able to render input with error variant', () => {
    render(
      <StyledThemeProvider>
        <Input value="value test" label="Label-test" error />
      </StyledThemeProvider>
    );

    const inputRoot = screen.getByTestId('input-root');
    const helperText = screen.getByTestId('helper-text');
    expect(inputRoot).toHaveStyle(`border: 1px solid ${theme.palette.error.main}`);
    expect(helperText).toBeInTheDocument();
  });

  test('Should be able to render a disabled input', () => {
    const { container } = render(
      <StyledThemeProvider>
        <Input value="value test" label="Label-test" disabled />
      </StyledThemeProvider>
    );

    const input = container.querySelector('#Label-test');
    expect(input).toBeDisabled();
  });
});
