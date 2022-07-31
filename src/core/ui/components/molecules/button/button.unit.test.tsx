import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Button } from './index';
import { ProvideStyledTheme } from '@/core/tests/mocks';

import { mainTheme as theme } from '@/core/presenters/contexts/styled-theme/themes/main';

describe('Button Unit test', () => {
  test('Should be able to render a Button with primary variant and outlined styleType', () => {
    render(
      ProvideStyledTheme(
        <Button variant="primary" styleType="outlined">
          Test
        </Button>
      )
    );

    const button = screen.getByTestId('styled-button');
    expect(button).toHaveStyle(`background: transparent`);
    expect(button).toHaveStyle(`color: ${theme.palette.primary.main}`);
    expect(button).toHaveStyle(`border: 1px solid ${theme.palette.primary.main}`);
  });

  test('Should be able to render a Button with error variant and fullfiled styleType', () => {
    render(
      ProvideStyledTheme(
        <Button variant="error" styleType="fullfiled">
          Test
        </Button>
      )
    );

    const button = screen.getByTestId('styled-button');
    expect(button).toHaveStyle(`background: ${theme.palette.error.main}`);
    expect(button).toHaveStyle(`color: ${theme.palette.grey[100]}`);
  });

  test('Should be able to render a Button with success variant and glass styleType', () => {
    render(
      ProvideStyledTheme(
        <Button variant="success" styleType="glass">
          Test
        </Button>
      )
    );

    const button = screen.getByTestId('styled-button');
    expect(button).toHaveStyle(`background: ${theme.palette.grey[100]}`);
    expect(button).toHaveStyle(`color: ${theme.palette.success.main}`);
  });

  test('Should be able to render a Button with black text color if the shade is below of 500', () => {
    render(
      ProvideStyledTheme(
        <Button variant="success" styleType="fullfiled" shade={300}>
          Test
        </Button>
      )
    );

    const button = screen.getByTestId('styled-button');
    expect(button).toHaveStyle(`color: ${theme.font.color.grey}`);
  });

  test('Should be able to render a Button with white text color if the shade is above of 500', () => {
    render(
      ProvideStyledTheme(
        <Button variant="success" styleType="fullfiled" shade={500}>
          Test
        </Button>
      )
    );

    const button = screen.getByTestId('styled-button');
    expect(button).toHaveStyle(`color: ${theme.palette.grey[100]}`);
  });
});
