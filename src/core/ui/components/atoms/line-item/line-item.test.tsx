import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProvideStyledTheme } from '@/core/tests/mocks';
import { LineItem } from '.';
import '@testing-library/jest-dom';

describe('LineItem - unit test', () => {
  test('Should be able to call render LineItem without the Link component', () => {
    render(
      ProvideStyledTheme(
        <BrowserRouter>
          <LineItem data-testid="line-link">some text</LineItem>
        </BrowserRouter>
      )
    );

    const lineItem = screen.queryByTestId('line-item');
    const lineLink = screen.queryByTestId('line-link');

    expect(lineItem).toBeInTheDocument();
    expect(lineLink).not.toBeInTheDocument();
  });

  test('Should be able to call render LineItem with Link component', () => {
    render(
      ProvideStyledTheme(
        <BrowserRouter>
          <LineItem data-testid="line-link" linkable>
            some text
          </LineItem>
        </BrowserRouter>
      )
    );

    const lineItem = screen.queryByTestId('line-item');
    const lineLink = screen.queryByTestId('line-link');

    expect(lineItem).not.toBeInTheDocument();
    expect(lineLink).toBeInTheDocument();
  });
});
