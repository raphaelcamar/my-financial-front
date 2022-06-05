import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { mainTheme as theme } from '@/core/presenters/contexts/styled-theme/themes/main';
import { StyledThemeProvider } from '@/core/presenters/contexts';
import { HelperText } from '.';

describe('Helper text unit tests', () => {
  test('Should be able to render the helper text with the disabled variant', () => {
    const { getByText } = render(
      <StyledThemeProvider>
        <HelperText disabled>Test</HelperText>
      </StyledThemeProvider>
    );

    const helperText = screen.getByTestId('helper-text');

    expect(helperText).toHaveStyle(`color: ${theme.palette.grey[400]}`);
    expect(getByText(/Test/i)).toBeInTheDocument();
  });

  test('Should be able to render the helper text with the success variant', () => {
    const { getByText } = render(
      <StyledThemeProvider>
        <HelperText variant="success">Test</HelperText>
      </StyledThemeProvider>
    );

    const helperText = screen.getByTestId('helper-text');

    expect(helperText).toHaveStyle(`color: ${theme.palette.success.main}`);
    expect(getByText(/Test/i)).toBeInTheDocument();
  });

  test('Should be able to render the helper text with the error variant', () => {
    const { getByText } = render(
      <StyledThemeProvider>
        <HelperText variant="error">Test</HelperText>
      </StyledThemeProvider>
    );

    const helperText = screen.getByTestId('helper-text');

    expect(helperText).toHaveStyle(`color: ${theme.palette.error.main}`);
    expect(getByText(/Test/i)).toBeInTheDocument();
  });
});
