import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { AuthTitle } from '.';
import { ProvideStyledTheme } from '@/core/tests/mocks';

describe('Auth title unit test', () => {
  test('Should be able to render the auth title with title and description', () => {
    const { getByText } = render(ProvideStyledTheme(<AuthTitle description="Description test" title="Title test" />));

    const authTitle = screen.getByTestId('auth-title');
    expect(authTitle).toBeInTheDocument();
    expect(getByText(/Description test/)).toBeInTheDocument();
    expect(getByText(/Title test/)).toBeInTheDocument();
  });
});
